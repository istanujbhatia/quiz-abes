export function chooseAgent(value) {
  if (value == "Gemini") {
    return getAnswerFromGemini;
  }
  if (value == "2") {
    return getAnswerFromDeepSeek;
  }
  if (value == "3") {
    return getAnswerFromOther;
  }
}
const URL = import.meta.env.VITE_SERVER_URL
export async function getQuizDetails(obj) {
  const url =
    `${URL}/quizDetails`
  const headers = { "Content-Type": "application/json" };
  const body = JSON.stringify(obj)
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: body,
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }


    
    const details= await response.json();
    return details;
  } catch (error) {
    console.error("Error generating answers:", error);
  }
}



export async function getQuizQuestions(obj) {
  const url =
    `${URL}/questions`;
  const headers = { "Content-Type": "application/json" };
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
    const prompts = await response.json();
    return prompts;
  } catch (error) {
    console.error("Error fetching quiz questions:", error);
  }
}

export async function submitAnswers(obj, ans) {
  const url =
    "https://faas-blr1-8177d592.doserverless.co/api/v1/web/fn-1c23ee6f-939a-44b2-9c4e-d17970ddd644/abes/submitAnswer";
    const headers = {
      "Content-Type": "application/json",
      "Accept": "application/json",

    };
    
  const body = JSON.stringify({
    quiz_uc: obj.quiz_uc,
    question_id: ans.id,
    user_unique_code: obj.user_unique_code,
    answer: parseInt(ans.correctOption),
    pin: obj.pin,
  });

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
    console.log(data);
  } catch (error) {
    console.error("Error submitting answers:", error);
  }
}

export async function submitAndExitQuiz(obj) {
  const url =
    "https://faas-blr1-8177d592.doserverless.co/api/v1/web/fn-1c23ee6f-939a-44b2-9c4e-d17970ddd644/abes/submitAndExitQuiz";
    const headers = {
      "Content-Type": "application/json",
      "Accept": "application/json",
    };
    

  const body = JSON.stringify({
    quiz_uc: obj.quiz_uc,
    user_unique_code: obj.user_unique_code,
    pin: obj.pin,
  });

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
    console.log(data);
  } catch (error) {
    console.error("Error submitting and exiting quiz:", error);
  }
}


export async function dbCheck(obj,prompt) {
  const url = `${URL}/dbCheck`;
  
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({prompt:prompt,userDetails:obj}),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const doExists = await response.json();
    

    return doExists// Return the fetched questions

  } catch (error) {
    console.error("something went wrong:", error);
    return false; // Return false if an error occurs
  }
}


// export function cleanJsonOptions(data, correctAnswers){
//   return data.map(item => {
//       const correctAnswer = correctAnswers.find(answer => answer.id === item.question_id.toString());
//       const correctIndex = correctAnswer ? item.options.findIndex(opt => opt.replace(/<pre>|<\/pre>/g, "") === correctAnswer.correctOptionText) : -1;
      
//       return {
//           question: item.question,
//           question_id: item.question_id,
//           options: item.options.map(opt => opt.replace(/<pre>|<\/pre>/g, "")),
//           correctOption: correctAnswer ? correctAnswer.correctOptionText : null,
//           correctOptionNumber: correctIndex+1
//       };
//   }).sort((a, b) => a.question_id - b.question_id);
// };

// Example JSON inputs





// Print cleaned JSON
// console.log(JSON.stringify(cleanedData, null, 2));
