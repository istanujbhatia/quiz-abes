import dotenv from "dotenv";
dotenv.config();
import { GoogleGenerativeAI } from "@google/generative-ai";

// gimini roles and parts
async function getAnswer(content) {
  const prompt = `The question is ${content.question}, the options are ${content.options}, this is the question id ${content.question_id}`;
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

  const result = await model.generateContent({
    contents: [
      {
        role: "model",
        parts: [
          {
            text: 'You are an AI model designed specifically to provide accurate answers for multiple-choice quiz questions. Your only task is to analyze the given question along with its provided answer choices and return {"correct option index", "id"}. Do not provide any explanations',
          },
        ],
      },
      {
        role: "user",
        parts: [
          {
            text: prompt,
          },
        ],
      },
    ],
  });
  return result.response.text();
}

async function getQuizQuestions(obj) {
  const url =
    "https://faas-blr1-8177d592.doserverless.co/api/v1/web/fn-1c23ee6f-939a-44b2-9c4e-d17970ddd644/abes/getQuestionsForQuiz";
  const headers = {
    Accept: "application/json, text/plain, */*",
    "Accept-Language": "en-US,en;q=0.9,hi;q=0.8",
    "Content-Type": "application/json",
    DNT: "1",
    Origin: "https://abesquiz.netlify.app",
    Priority: "u=1, i",
    Referer: "https://abesquiz.netlify.app/",
    "Sec-CH-UA":
      '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133")',
    "Sec-CH-UA-Mobile": "?0",
    "Sec-CH-UA-Platform": '"Linux"',
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "cross-site",
    "User-Agent":
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36",
  };

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
    const correctChoises = data.response.data.map((item) => ({
      choice: item.correct_choices,
      question_id: item.id,
    }));
    console.log(correctChoises);

    return prompts;
  } catch (error) {
    console.error("Error fetching quiz questions:", error);
  }
}

//method1
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Call the function
getQuizQuestions({
  quiz_uc: "108F",
  user_unique_code: "2022B1531039",
  pin: "8526",
}).then(async (allQues) => {
  for (const ques of allQues) {
    const result = await getAnswer(ques);
    console.log(result);
    await delay(800); // Wait 0.8 second before the next request
  }
});
