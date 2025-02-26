import React, { useState } from "react";
import './QuizLogin.css'
const QuizLogin = () => {
  const [quizCode, setQuizCode] = useState("");
  const [admissionNumber, setAdmissionNumber] = useState("");
  const [pin, setPin] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Quiz Code:", quizCode);
    console.log("Admission Number:", admissionNumber);
    console.log("PIN:", pin);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-teal-400 to-teal-200">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-sm w-full">
        <h2 className="text-xl font-semibold text-center mb-6">Enter Your Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium">Enter Quiz Code:</label>
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
            <label className="block text-sm font-medium">Enter Admission Number:</label>
            <input
              type="text"
              value={admissionNumber}
              onChange={(e) => setAdmissionNumber(e.target.value)}
              className="w-full mt-1 p-2 border rounded-lg"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium">Enter 4 Digit Pin:</label>
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
            className="w-full bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600"
          >
            Continue
          </button>
        </form>
        <div className="mt-6 text-sm text-gray-600">
          <p><strong>Notes:</strong></p>
          <ul className="list-disc pl-4">
            <li><a href="#" className="text-blue-500">How do I get the quiz code?</a></li>
            <li><a href="#" className="text-blue-500">How do I set my own 4 digit pin?</a></li>
            <li>Zero and English alphabet O look similar. Be mindful.</li>
            <li>The code will work only if the quiz is scheduled now.</li>
            <li>If the quiz was completed in the past, you won’t be able to access it.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default QuizLogin;
