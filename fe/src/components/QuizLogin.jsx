import {
  getQuizQuestions,
  chooseAgent,
  submitAnswers,
  submitAndExitQuiz,
  getQuizDetails,
  cleanJsonOptions,
  dbCheck,
  // mapCorrectOptions,
} from "./quizBackend";
import React, { useState } from "react";
import "./QuizLogin.css";

const QuizLogin = () => {
  const [quizCode, setQuizCode] = useState("");
  const [admissionNumber, setAdmissionNumber] = useState("");
  const [pin, setPin] = useState("");
  const [selectedModel, setSelectedModel] = useState("Gemini");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh

    const userDetails = {
      quiz_uc: quizCode,
      user_unique_code: admissionNumber,
      pin: pin,
    };

    // console.log("User Details:", userDetails);

    try {
      // const details = await getQuizDetails(userDetails);
      // console.log(details);

      // { ye sb details me se aayega quiz ki

      //     some conditions ckecked :
      //     1. not started or indalid id popup
      //     2. if window is there then start Timeer()
      //     3. if quiz started (
      //       i. user has not logged in then popup that window expired
      //      ii. if user has logged in earlier ans then starts a quiz show ans yaha se full be vala kaam
      // 4. if quiz expired
      //     )
      //
      // now
      const prompts = await getQuizQuestions(userDetails); // Fetch quiz questions and retutn the prompt
      // console.log(prompts);//acutal ques , options , id
      
      // 1/db check
      let dataFromDb=await dbCheck(userDetails,prompts)
      let finalData=cleanJsonOptions(prompts, dataFromDb.answers.ques)


      
      
      // console.log(dataFromDb.success);
      
      if(dataFromDb.success){


        // // console.log(dataFromDb);
        console.log(finalData);
        

      
        
        

      }
      else{
        // get data from db again as till now data would be saved
        dataFromDb=await dbCheck(userDetails,prompts)
        // console.log(dataFromDb);
        // console.log(dataFromDb.answers.ques)
        console.log(finalData);
        

        

    
        

      }



      
      /*either return true (if there existes a code)
      {
          sort ques
          match 
          ans mark 
          show 
          submit 
          exit
      }

      if not exists 
      {

          put code in db
          gimini call
          map ques id with ans 
          store
      }












*/



      
      // console.log("Quiz Questions:", quizQuestions);

      //  // Select the AI model
      // const answers = await agent(prompts); // Get AI-generated answers

      // console.log("Answers:", answers);

      for (const ans of finalData) {
        let toSubmit={
          correctOption:ans.correctOptionNumber,
          id:ans.question_id

        }
        // console.log(ans);
        
        await submitAnswers(userDetails, toSubmit); // Submit each answer
      }

      // console.log("All answers submitted!");

      // Submit and Exit the Quiz
      // await submitAndExitQuiz(userDetails);
      // console.log("Quiz submission completed.");
    } catch (error) {
      console.error("Error handling quiz:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-teal-400 to-teal-200">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-sm w-full">
        <h2 className="text-xl font-semibold text-center mb-6">
          Enter Your Details
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium">
              Enter Quiz Code:
            </label>
            <input
              type="text"
              value={quizCode}
              maxLength={4}
              onChange={(e) => setQuizCode(e.target.value)}
              className="w-full mt-1 p-2 border rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">
              Enter Admission Number:
            </label>
            <input
              type="text"
              maxLength={12}
              value={admissionNumber}
              onChange={(e) => setAdmissionNumber(e.target.value)}
              className="w-full mt-1 p-2 border rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">
              Enter 4 Digit Pin:
            </label>
            <input
              type="password"
              value={pin}
              maxLength={4}
              onChange={(e) => setPin(e.target.value)}
              className="w-full mt-1 p-2 border rounded-lg"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium">Select Model:</label>
            <div className="flex gap-4 mt-2">
              {["Gemini", "ChatGPT", "DeepSeek"].map((model) => (
                <label key={model} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    value={model}
                    checked={selectedModel === model}
                    onChange={(e) => setSelectedModel(e.target.value)}
                    className="form-radio"
                    disabled={model !== "Gemini"}
                  />
                  <span>
                    {model} {model !== "Gemini" && "(Soon)"}
                  </span>
                </label>
              ))}
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600"
          >
            Continue
          </button>
        </form>
        <div className="mt-6 text-sm text-gray-600">
          <p>
            <strong>Important Notes:</strong>
          </p>
          <ul className="list-disc pl-4">
            <li>
              The answers provided are generated by the selected model and may
              not always be accurate.
            </li>
            <li>
              You have the choice to review the answers before finalizing your
              response.
            </li>
            <li>Marked answers may not be 100% correct.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default QuizLogin;
