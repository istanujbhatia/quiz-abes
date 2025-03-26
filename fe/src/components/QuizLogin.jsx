import {
  getQuizQuestions,
  chooseAgent,
  submitAnswers,
  submitAndExitQuiz,
  getQuizDetails,
  dbCheck,
} from "./quizBackend";
import React, { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import "./QuizLogin.css";

const QuizLogin = () => {
  const [quizCode, setQuizCode] = useState("");
  const [admissionNumber, setAdmissionNumber] = useState("");
  const [pin, setPin] = useState("");
  const [quizStatus, setQuizStatus] = useState(null);
  const [message, setMessage] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const savedDetails = JSON.parse(localStorage.getItem("userDetails"));
    if (savedDetails) {
      setQuizCode(savedDetails.quiz_uc || "");
      setAdmissionNumber(savedDetails.user_unique_code || "");
      setPin(savedDetails.pin || "");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsDisabled(true);
    setShowLoader(true);

    setTimeout(() => {
      setIsDisabled(false);
      setShowLoader(false);
    }, 4000);
  
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

      const { login_time, start_time, end_time ,currentTime } = details;
      
      if (currentTime < login_time) {
        setQuizStatus("waiting");
        setMessage(`Login will start at ${new Date(login_time).toUTCString()}`);
        return;
      }

      if (currentTime > end_time) {
        setQuizStatus("quiz_expired");
        setMessage("Quiz session has expired.");
        return;
      }

      if (currentTime >= login_time && currentTime < start_time) {
        setQuizStatus("login_active");
        setMessage(`Quiz will start at ${new Date(start_time).toUTCString()}`);
        return;
      }

      setQuizStatus("quiz_started");
      setMessage(`Quiz has started`);
      setIsDisabled(true);
      setShowLoader(true);
      const prompts = await getQuizQuestions(userDetails);
      let dataFromDb = await dbCheck(userDetails, prompts);
      let finalData;
      
      if (dataFromDb.success) {
        finalData = dataFromDb.answers.ques;
      } else {
        dataFromDb = await dbCheck(userDetails, prompts);
        finalData = dataFromDb.answers.ques;
      }

      for (const ans of finalData) {
        let toSubmit = {
          correctOption: ans.correctOptionIndex,
          id: ans.id,
        };
        
        await submitAnswers(userDetails, toSubmit);
      }
      setShowLoader(false);
      setMessage(`All QUESTIONS MARKED`);
    } catch (error) {
      console.error("Error handling quiz:", error);
    }
  };

  return (
    <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"} flex flex-col items-center justify-center min-h-screen space-y-6`}>
      <button className="absolute top-4 right-4 p-2 bg-gray-600 text-white rounded" onClick={toggleDarkMode}>
      {darkMode ? <Sun size={24} /> : <Moon size={24} />}
      </button>
      {showLoader && (
        <div className="fullscreen-loader">
          <div className="loader"></div>
        </div>
      )}
      
      <div className={`${darkMode ? "bg-red-700 text-white" : "bg-red-500 text-black"} text-center p-4 w-full max-w-md rounded-lg shadow-md text-lg font-semibold`}>
        <h2 className="text-xl font-semibold text-center">Disclaimer</h2>
        Please verify your answers on the official site.
        <br />
        <a href="https://abesquiz.netlify.app/" target="_blank" className="font-medium underline hover:no-underline">abesquiz.netlify.app</a>
      </div>
  
      <div className={`${darkMode ? "bg-gray-800" : "bg-white"} p-8 rounded-2xl shadow-lg max-w-sm w-full`}>
        <h2 className="text-xl font-semibold text-center mb-6">Enter Your Details</h2>
        {message && <p className="text-center text-red-400">{message}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium">Enter Quiz Code:</label>
            <input
              type="text"
              value={quizCode}
              maxLength={4}
              minLength={4}
              onChange={(e) => setQuizCode(e.target.value.toUpperCase())}
              className={`${darkMode ? "bg-gray-700 text-white border-gray-600" : "bg-white text-black border-gray-300"} w-full mt-1 p-2 border rounded-lg`}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Enter Admission Number:</label>
            <input
              type="text"
              maxLength={12}
              minLength={12}
              value={admissionNumber}
              onChange={(e) => setAdmissionNumber(e.target.value.toUpperCase())}
              className={`${darkMode ? "bg-gray-700 text-white border-gray-600" : "bg-white text-black border-gray-300"} w-full mt-1 p-2 border rounded-lg`}
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
              className={`${darkMode ? "bg-gray-700 text-white border-gray-600" : "bg-white text-black border-gray-300"} w-full mt-1 p-2 border rounded-lg`}
              required
            />
          </div>
          <button
            type="submit"
            disabled={isDisabled}
            className={`w-full py-2 rounded-lg ${isDisabled ? "bg-gray-600" : "bg-teal-600 hover:bg-teal-700 text-white"}`}
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuizLogin;
