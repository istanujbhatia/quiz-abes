import dotenv from "dotenv"

dotenv.config()

// import OpenAI from "openai";

// const openai = new OpenAI({
//   apiKey:process.env.OPEN_API_KEY,
// });

// const completion = openai.chat.completions.create({
//   model: "gpt-4o-mini",
//   store: true,
//   messages: [
//     {"role": "user", "content": "write a haiku about ai"},
//   ],
// });

// completion.then((result) => console.log(result.choices[0].message));


import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

const prompt = "heyyyy";

const result = await model.generateContent(prompt);
console.log(result.response.text());