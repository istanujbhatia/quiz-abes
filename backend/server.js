import express from "express";
import "dotenv/config";
import cors from "cors";
import "dotenv/config";
import { GoogleGenerativeAI, SchemaType } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI(process.env.VITE_GEMINI_API_KEY);

const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT;
app.get("/", (req, res) => {
  res.send({
    msg: "hello",
  });
});

app.post("/questions", (req, res) => {
  const body = JSON.stringify(req.body);
  //   console.log(body);
  const url =
    "https://faas-blr1-8177d592.doserverless.co/api/v1/web/fn-1c23ee6f-939a-44b2-9c4e-d17970ddd644/abes/getQuestionsForQuiz";
  const headers = { "Content-Type": "application/json" };

  fetch(url, {
    method: "POST",
    headers: headers,
    body: body,
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const prompts = data.response.data.map((item) => ({
        options: item.options,
        question: item.question,
        question_id: item.id,
      }));
      //   console.log(prompts);

      res.send(prompts);
    })
    .catch((error) => {
      console.error("Error fetching quiz questions:", error);
    });
});

app.post("/generate", async (req, res) => {
  const quizData = req.body;
  // console.log(quizData);

  const cleanText = (text) => text.replace(/<\/?pre>/g, ""); // Removes <pre> tags

  const prompt = quizData
    .map(
      (q, index) =>
        `Question ${index + 1}: ${cleanText(q.question)}, Options: ${q.options
          .map(cleanText)
          .join(", ")}, ID: ${q.question_id}`
    )
    .join("\n");

  // console.log(prompt);

  const schema = {
    description:
      "Response containing correct answer indices for multiple quiz questions",
    type: "array",
    items: {
      type: SchemaType.OBJECT,
      properties: {
        id: {
          type: SchemaType.STRING,
          description: "The unique identifier of the question",
        },
        correctOptionIndex: {
          type: SchemaType.NUMBER,
          description:
            "The index of the correct answer in the provided options",
        },
      },
      required: ["id", "correctOptionIndex"],
    },
  };

  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
    generationConfig: {
      responseMimeType: "application/json",
      responseSchema: schema,
    },
  });

  const result = await model.generateContent({
    contents: [
      {
        role: "model",
        parts: [
          {
            text: `You are an AI model designed specifically to provide accurate answers for multiple-choice quiz questions. Your only task is to analyze each question along with its provided answer choices and return a JSON array of objects in the format: [{"id": "question_id", "correctOptionIndex": number}]. Do not provide any explanations. Here are the questions:\n\n${prompt}`,
          },
        ],
      },
    ],
  });

  res.json(JSON.parse(result.response.text()));
});

app.post("/quizdetails", (req, res) => {
  const body = JSON.stringify(req.body);
  const headers = { "Content-Type": "application/json" };
  const url =
    "https://faas-blr1-8177d592.doserverless.co/api/v1/web/fn-1c23ee6f-939a-44b2-9c4e-d17970ddd644/abes/fetchQuizDetails";

  fetch(url, {
    method: "POST",
    headers: headers,
    body: body,
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.error(err);
    });
});

app.listen(port, () => {
  console.log(`App listening to port ${port}`);
});
