import {
  getQuizQuestions,
  chooseAgent,
  submitAnswers,
  submitAndExitQuiz,
  getQuizDetails,
  cleanJsonOptions,
  dbCheck,
} from "./quizBackend";
import React, { useState, useEffect } from "react";
import "./QuizLogin.css";

const QuizLogin = () => {
  const [quizCode, setQuizCode] = useState("");
  const [admissionNumber, setAdmissionNumber] = useState("");
  const [pin, setPin] = useState("");
  const [selectedModel, setSelectedModel] = useState("Gemini");
  const [quizStatus, setQuizStatus] = useState(null);
  const [timeLeft, setTimeLeft] = useState(null);
  const [loginTimeLeft, setLoginTimeLeft] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);
  // const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // Load saved user details from local storage
    const savedDetails = JSON.parse(localStorage.getItem("userDetails"));
    if (savedDetails) {
      setQuizCode(savedDetails.quiz_uc || "");
      setAdmissionNumber(savedDetails.user_unique_code || "");
      setPin(savedDetails.pin || "");
    }
  }, []);

  useEffect(() => {
    let loginTimer;
    if (quizStatus === "waiting" && loginTimeLeft > 0) {
      loginTimer = setInterval(() => {
        setLoginTimeLeft((prev) => {
          if (prev > 1) return prev - 1;
          clearInterval(loginTimer);
          setQuizStatus("login_active");
          setIsDisabled(false);
          return 0;
        });
      }, 1000);
    }
    return () => clearInterval(loginTimer);
  }, [quizStatus, loginTimeLeft]);

  useEffect(() => {
    let timer;
    if (quizStatus === "login_active" && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev > 1) return prev - 1;
          clearInterval(timer);
          setQuizStatus("quiz_started");
          setIsDisabled(false); // Transition to quiz started
          return 0;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [quizStatus, timeLeft]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setErrorMessage("");

    const userDetails = {
      quiz_uc: quizCode,
      user_unique_code: admissionNumber,
      pin: pin,
    };
    localStorage.setItem("userDetails", JSON.stringify(userDetails));

    try {
      const details = await getQuizDetails(userDetails);

      /* now form here just to add 
      1. disable button when login to be start
      2. checks for valid or invalid user {this will be given by the api}
      3. map actual api response to the conditios below and change that hard coded timestamp
      
      
      
      
      
      */
      if (!details.success) {
        setQuizStatus("Invalid");
        return;
      }

      const { login_time, start_time, end_time } = details;
      const currentTime = new Date().getTime();

      if (currentTime < login_time) {
        setQuizStatus("waiting");
        setLoginTimeLeft(Math.floor((login_time - currentTime) / 1000));
        setIsDisabled(true);
        return;
      }

      if (currentTime > end_time) {
        setQuizStatus("quiz_expired");
        return;
      }
      if (currentTime >= login_time && currentTime < start_time) {
        setQuizStatus("login_active");
        setTimeLeft(Math.floor((start_time - currentTime) / 1000));
        setIsDisabled(true);
        return;
      }

      setQuizStatus("quiz_started");
      setIsDisabled(false);
      const prompts = await getQuizQuestions(userDetails);
      let dataFromDb = await dbCheck(userDetails, prompts);
      let finalData;
      if (dataFromDb.success) {
        finalData = cleanJsonOptions(prompts, dataFromDb.answers.ques);
        console.log(finalData);
      } else {
        dataFromDb = await dbCheck(userDetails, prompts);
        finalData = cleanJsonOptions(prompts, dataFromDb.answers.ques);

        console.log(finalData);
      }
      //ans submit 
      // for (const ans of finalData) {
      //   let toSubmit = {
      //     correctOption: ans.correctOptionNumber,
      //     id: ans.question_id,
      //   };
      //   await submitAnswers(userDetails, toSubmit);
      // }
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
        {quizStatus === "invalid" && (
          <p className="text-red-500 text-center">
            Invalid Quiz Code. Please try again.
          </p>
        )}
        {quizStatus === "waiting" && (
          <p className="text-blue-500 text-center">Login window will start in {loginTimeLeft} seconds...</p>
        )}
        
        {quizStatus === "login_active" && timeLeft > 0 && (
          <p className="text-green-500 text-center">

            Quiz will start in {timeLeft} seconds.
          </p>
        )}
        {quizStatus === "quiz_started" && (
          <p className="text-green-600 text-center">Quiz started!</p>
        )}

        {/*make it to automatically login for the user so no user faces quiz window expire issue */}
        {quizStatus === "quiz_expired" && (
          <p className="text-red-500 text-center">Quiz session has expired.</p>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium">
              Enter Quiz Code:
            </label>
            <input
              type="text"
              value={quizCode}
              maxLength={4}
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
          <button
            type="submit"
            disabled={isDisabled}
            className={`w-full py-2 rounded-lg ${
              isDisabled
                ? "bg-gray-400"
                : "bg-teal-500 hover:bg-teal-600 text-white"
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
