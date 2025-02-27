import { GoogleGenerativeAI, SchemaType } from "@google/generative-ai";

export function chooseAgent(value) {
  if (value == "Gemini") {
    return getAnswerFromGemini;
  }
  if (value == "2") {
    return getAnswerFromDeepSeek;
  }
  if (value == "3") {
    return getAnswerFromOther;
  }
}
export async function getQuizDetails(obj) {
  fetch(
    "https://faas-blr1-8177d592.doserverless.co/api/v1/web/fn-1c23ee6f-939a-44b2-9c4e-d17970ddd644/abes/fetchQuizDetails",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.9,hi;q=0.8",
        "content-type": "application/json",
        priority: "u=1, i",
        "sec-ch-ua":
          '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Linux"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "cross-site",
      },
      referrer: "https://quiz.abesaims.site/",
      referrerPolicy: "strict-origin-when-cross-origin",
      body: JSON.stringify(obj),
      method: "POST",
      mode: "cors",
      credentials: "omit",
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.error(err);
    });
}

export async function getAnswerFromGemini(quizData) {
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

  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

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

  return JSON.parse(result.response.text());
}

export async function getQuizQuestions(obj) {
  const url =
    "https://faas-blr1-8177d592.doserverless.co/api/v1/web/fn-1c23ee6f-939a-44b2-9c4e-d17970ddd644/abes/getQuestionsForQuiz";
  const headers = { "Content-Type": "application/json" };

  const body = JSON.stringify(obj);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: body,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    const prompts = data.response.data.map((item) => ({
      options: item.options,
      question: item.question,
      question_id: item.id,
    }));
    // const correctChoises = data.response.data.map((item) => ({
    //   choice: item.correct_choices,
    //   question_id: item.id,
    // }));
    // console.log(correctChoises);

    return prompts;
  } catch (error) {
    console.error("Error fetching quiz questions:", error);
  }
}

export async function submitAnswers(obj, ans) {
  const url =
    "https://faas-blr1-8177d592.doserverless.co/api/v1/web/fn-1c23ee6f-939a-44b2-9c4e-d17970ddd644/abes/submitAnswer";
  const headers = {
    accept: "application/json, text/plain, */*",
    "accept-language": "en-US,en;q=0.9,hi;q=0.8",
    "content-type": "application/json",
    dnt: "1",
    origin: "https://quiz.abesaims.site",
    priority: "u=1, i",
    referer: "https://quiz.abesaims.site/",
    "sec-ch-ua":
      '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": '"Linux"',
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "cross-site",
    "user-agent":
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
  };
  const body = JSON.stringify({
    quiz_uc: obj.quiz_uc,
    question_id: ans.id,
    user_unique_code: obj.user_unique_code,
    answer: ans.correctOptionIndex,
    pin: obj.pin,
  });
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: body,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error submitting answers:", error);
  }
}

export async function submitAndExitQuiz(obj) {
  const url =
    "https://faas-blr1-8177d592.doserverless.co/api/v1/web/fn-1c23ee6f-939a-44b2-9c4e-d17970ddd644/abes/submitAndExitQuiz";
  const headers = {
    accept: "application/json, text/plain, */*",
    "accept-language": "en-US,en;q=0.9,hi;q=0.8",
    "content-type": "application/json",
    dnt: "1",
    origin: "https://quiz.abesaims.site",
    priority: "u=1, i",
    referer: "https://quiz.abesaims.site/",
    "sec-ch-ua":
      '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": '"Linux"',
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "cross-site",
    "user-agent":
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
  };

  const body = JSON.stringify({
    quiz_uc: obj.quiz_uc,
    user_unique_code: obj.user_unique_code,
    pin: obj.pin,
  });

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: body,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error submitting and exiting quiz:", error);
  }
}
