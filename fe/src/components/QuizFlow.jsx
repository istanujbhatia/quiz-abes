import React, { useState, useEffect } from "react";
import { getQuizDetails, getQuizQuestions } from "./quizBackend";

const QuizFlow = () => {
  const [quizDetails, setQuizDetails] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [modalOpen, setModalOpen] = useState(true);
  const [countdown, setCountdown] = useState(null);
  const [quizStarted, setQuizStarted] = useState(false);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const details = await getQuizDetails();
        setQuizDetails(details.response.data);
      } catch (error) {
        console.error("Error fetching quiz details:", error);
      }
    };
    fetchDetails();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (quizDetails) {
      const loginTime = new Date(quizDetails.login_time);
      const startTime = new Date(quizDetails.start_time);
      if (currentTime < loginTime) {
        setModalOpen(true);
      } else if (currentTime >= loginTime && currentTime < startTime) {
        setModalOpen(false);
        setCountdown((startTime - currentTime) / 1000);
      } else if (currentTime >= startTime) {
        setQuizStarted(true);
      }
    }
  }, [currentTime, quizDetails]);

  useEffect(() => {
    if (countdown !== null && countdown > 0) {
      const interval = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [countdown]);

  useEffect(() => {
    if (quizStarted) {
      const fetchQuestions = async () => {
        try {
          const quizData = await getQuizQuestions();
          setQuestions(quizData);
        } catch (error) {
          console.error("Error fetching quiz questions:", error);
        }
      };
      fetchQuestions();
    }
  }, [quizStarted]);

  return (
    <div className="quiz-container">
      {modalOpen && (
        <div className="modal">
          <p>Login window has not started yet. Please wait.</p>
        </div>
      )}
      {countdown !== null && countdown > 0 && !quizStarted && (
        <div className="countdown">Quiz starts in: {countdown} seconds</div>
      )}
      {quizStarted && questions.length > 0 && (
        <div className="quiz">
          <h2>Quiz Questions</h2>
          <ul>
            {questions.map((q, index) => (
              <li key={index}>{q.question}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default QuizFlow;
