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
import InstallPrompt from "./InstallPrompt";

const QuizLogin = () => {
  const [quizCode, setQuizCode] = useState("");
  const [admissionNumber, setAdmissionNumber] = useState("");
  const [pin, setPin] = useState("");
  const [message, setMessage] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  // const [totalLogins, setTotalLogins] = useState(0);  // Track the total logins

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
  // const TotalLogs = getTotalLoginsFromDb();
  
// console.log(totalLogins);

  

  function redirect() {
    const savedDetails = JSON.parse(localStorage.getItem("userDetails"));
    const { quiz_uc, user_unique_code, pin } = savedDetails;
    const today = new Date();
    const date = today.toISOString().split("T")[0];
    const encodedString = `${date}#_${user_unique_code}#_${quiz_uc}#_${pin}`;
    const encodedParam = btoa(encodedString);
    const url =
      "https://abesquiz.netlify.app/#/start-quiz?req_id=" + encodedParam;
    window.open(url, "_blank");
    setShowLoader(false);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsDisabled(true);
    setShowLoader(true);

    setTimeout(() => {
      setIsDisabled(false);
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
        setShowLoader(false);
        setMessage(details.msg || "Something went wrong");
        return;
      }

      setMessage(`Marking answers...`);
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
      setTimeout(() => {
        setShowLoader(true);
        setTimeout(redirect, 3000);
        setMessage("\uD83D\uDE18");
      }, 1000);

      // Update total logins count and save to localStorage
      const newTotalLogins = totalLogins + 1;
      setTotalLogins(newTotalLogins);
      localStorage.setItem("totalLogins", newTotalLogins);

    } catch (error) {
      console.error("Error handling quiz:", error);
    }
  };

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      } transition-colors duration-500 ease-in-out flex flex-col items-center justify-center min-h-screen space-y-6`}
    >
      <button
        className="absolute top-4 right-4 p-2 bg-gray-600 text-white rounded"
        onClick={toggleDarkMode}
      >
        {darkMode ? <Sun size={24} /> : <Moon size={24} />}
      </button>
      {showLoader && (
        <div className="fullscreen-loader">
          <div className="loader"></div>
        </div>
      )}

      {/* WELCOME BACK Heading */}
      <h1 className="text-3xl font-bold text-center mb-4">Welcome Back</h1>

      {/* "Enter Your Details" moved outside of the form box */}
      <p className="text-m font-semibold text-center mb-12">
        Enter Your Details To Access The Quiz
      </p>

      <div
        className={`${
          darkMode ? "bg-gray-800" : "bg-white"
        } transition-colors duration-500 ease-in-out p-8 rounded-3xl shadow-lg max-w-md w-full`}
      >
        {message && <p className="text-center text-red-400">{message}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium">
              Enter Quiz Code:
            </label>
            <input
              type="text"
              value={quizCode}
              maxLength={4}
              minLength={4}
              onChange={(e) => setQuizCode(e.target.value.toUpperCase())}
              className={`${
                darkMode
                  ? "bg-gray-700 text-white border-gray-600"
                  : "bg-white text-black border-gray-300"
              } transition-colors duration-500 ease-in-out w-full mt-1 p-2 border rounded-lg`}
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
              className={`${
                darkMode
                  ? "bg-gray-700 text-white border-gray-600"
                  : "bg-white text-black border-gray-300"
              } transition-colors duration-500 ease-in-out w-full mt-1 p-2 border rounded-lg`}
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
              minLength={4}
              onChange={(e) => setPin(e.target.value)}
              className={`${
                darkMode
                  ? "bg-gray-700 text-white border-gray-600"
                  : "bg-white text-black border-gray-300"
              } transition-colors duration-500 ease-in-out w-full mt-1 p-2 border rounded-lg`}
              required
            />
          </div>
          <button
            type="submit"
            disabled={isDisabled}
            className={`w-full py-2 rounded-lg ${
              isDisabled
                ? "bg-gray-600"
                : "bg-teal-600 hover:bg-teal-700 text-white"
            }`}
          >
            Continue
          </button>
        </form>

        <br /> {/* Add line break before showing total logins */}
        
        {/* Total Logins Section */}
        {/* <div className="mt-4 text-center">
          <p className="text-lg font-semibold">Total Logins: {totalLogins}</p>
        </div> */}
      </div>
      
      <InstallPrompt darkMode={darkMode} />
    </div>
  );
};

export default QuizLogin;
