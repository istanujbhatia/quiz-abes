import React from "react";
import QuizLogin from "./components/QuizLogin.jsx";

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").then((reg) => {
      // console.log("Service Worker registered", reg);
    });
  });
}
function App() {
  return (
    <div>

      <QuizLogin />
    </div>
  );
}

export default App;
