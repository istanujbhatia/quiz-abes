import {
  getQuizQuestions,
  chooseAgent,
  submitAnswers,
  // submitAndExitQuiz,
  getQuizDetails,
  dbCheck,
} from "./quizBackend";
import React, { useState, useEffect } from "react";
import "./QuizLogin.css";

const QuizLogin = () => {
  const [quizCode, setQuizCode] = useState("");
  const [admissionNumber, setAdmissionNumber] = useState("");
  const [pin, setPin] = useState("");
  const [quizStatus, setQuizStatus] = useState(null);
  const [message, setMessage] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    // Load saved user details from local storage
    const savedDetails = JSON.parse(localStorage.getItem("userDetails"));
    if (savedDetails) {
      setQuizCode(savedDetails.quiz_uc || "");
      setAdmissionNumber(savedDetails.user_unique_code || "");
      setPin(savedDetails.pin || "");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userDetails = {
      quiz_uc: quizCode,
      user_unique_code: admissionNumber,
      pin: pin,
    };
    localStorage.setItem("userDetails", JSON.stringify(userDetails));

    try {
      const details = await getQuizDetails(userDetails);

      if (!details.success) {
        setQuizStatus("invalid");
        setMessage(details.msg || "Something went wrong");
        return;
      }

      const { login_time, start_time, end_time } = details;
      const currentTime = new Date().getTime();

      if (currentTime < login_time) {
        setQuizStatus("waiting");
        setMessage(
          `Login will start at ${new Date(login_time).toLocaleString()}`
        );
        return;
      }

      if (currentTime > end_time) {
        setQuizStatus("quiz_expired");
        setMessage("Quiz session has expired.");
        return;
      }

      if (currentTime >= login_time && currentTime < start_time) {
        setQuizStatus("login_active");
        setMessage(
          `Quiz will start at ${new Date(start_time).toLocaleString()}`
        );
        return;
      }

      setQuizStatus("quiz_started");
      setMessage(`Quiz has started`);
      setIsDisabled(true);
      const prompts = await getQuizQuestions(userDetails);
      let dataFromDb = await dbCheck(userDetails, prompts);
      let finalData;
      console.log(prompts);
      
      
      if (dataFromDb.success) {
        finalData = dataFromDb.answers.ques;
        console.log(finalData);
      } else {
        dataFromDb = await dbCheck(userDetails, prompts);
        finalData = dataFromDb.answers.ques;
        console.log(finalData);
      }

      for (const ans of finalData) {
        let toSubmit = {
          correctOption: ans.correctOptionIndex,
          id: ans.id,
        };
        console.log(toSubmit);
        
        await submitAnswers(userDetails, toSubmit);
      }
    } catch (error) {
      console.error("Error handling quiz:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-teal-400 to-teal-200 space-y-6">
      {/* Disclaimer Box - Separate from Form */}
      
      <div className="bg-red-500 text-white text-center p-4 w-full max-w-md rounded-lg shadow-md text-lg font-semibold">
      <h2 className="text-xl font-semibold text-center text-black">
          Disclaimer
        </h2>
        This app is in the testing phase. After the quiz starts, clicking "Continue" will mark answers but will NOT submit and exit the quiz. Please verify your answers on the official site.
        <br />
        <a href="https://quiz.abesaims.site/" target="_blank">quiz.abesaims.site</a>
      </div>
  
      {/* Login Form */}
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-sm w-full">
        <h2 className="text-xl font-semibold text-center mb-6 text-black-700">
          Enter Your Details
        </h2>
        {message && <p className="text-center text-red-500">{message}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium">Enter Quiz Code:</label>
            <input
              type="text"
              value={quizCode}
              maxLength={4}
              minLength={4}
              onChange={(e) => setQuizCode(e.target.value.toUpperCase())}
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
              minLength={12}
              value={admissionNumber}
              onChange={(e) => setAdmissionNumber(e.target.value.toUpperCase())}
              className="w-full mt-1 p-2 border rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Enter 4 Digit Pin:</label>
            <input
              type="password"
              value={pin}
              maxLength={4}
              minLength={4}
              onChange={(e) => setPin(e.target.value)}
              className="w-full mt-1 p-2 border rounded-lg"
              required
            />
          </div>
          <button
            type="submit"
            disabled={isDisabled}
            className={`w-full py-2 rounded-lg ${
              isDisabled ? "bg-gray-400" : "bg-teal-500 hover:bg-teal-600 text-white"
            }`}
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
  
  
};

export default QuizLogin;