// // curl 'https://faas-blr1-8177d592.doserverless.co/api/v1/web/fn-1c23ee6f-939a-44b2-9c4e-d17970ddd644/abes/fetchQuizDetails' \
// //   -H 'accept: application/json, text/plain, */*' \
// //   -H 'accept-language: en-US,en;q=0.9,hi;q=0.8' \
// //   -H 'content-type: application/json' \
// //   -H 'dnt: 1' \
// //   -H 'origin: https://quiz.abesaims.site' \
// //   -H 'priority: u=1, i' \
// //   -H 'referer: https://quiz.abesaims.site/' \
// //   -H 'sec-ch-ua: "Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"' \
// //   -H 'sec-ch-ua-mobile: ?0' \
// //   -H 'sec-ch-ua-platform: "Linux"' \
// //   -H 'sec-fetch-dest: empty' \
// //   -H 'sec-fetch-mode: cors' \
// //   -H 'sec-fetch-site: cross-site' \
// //   -H 'user-agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36' \
// //   --data-raw '{"quiz_uc":"108F","user_unique_code":"2022B1531039","pin":"8526"}'



// // curl res
// // {"response":{"data":{"total_marks":"10","id":17682,"cdata":{"subject":"","course_name":"Object Oriented System Design with C++","instructions":null,"date_formatted":"19-Dec-2024","start_end_time":"01:52pm - 01:59pm","academic_session":"2024-25","end_time_formatted":"01:59pm 19-Dec-2024","login_time_formatted":"01:49pm 19-Dec-2024","start_time_formatted":"01:52pm 19-Dec-2024","debarred_students_count":"0","exempted_students_count":"0"},"unique_code":"108F","login_time":"2024-12-19 13:49:00","batch":"2026","section":"A","faculty_name":"UTKARSH DIXIT","master_course_code":"BCS054","dept":"CSE (AIML)","list_id":"20392","group":null,"course_id":7188114,"batch_id":961,"semester":5,"faculty_id":6359958,"dept_id":772,"cf_id":7193171,"duration":7,"login_window":3,"questions_count":"7","start_time":"2024-12-19 13:52:00","end_time":"2024-12-19 13:59:00"}},"time_now":"2024-12-19 13:51:31"}





// fetch("https://faas-blr1-8177d592.doserverless.co/api/v1/web/fn-1c23ee6f-939a-44b2-9c4e-d17970ddd644/abes/fetchQuizDetails", {
//     "headers": {
//       "accept": "application/json, text/plain, */*",
//       "accept-language": "en-US,en;q=0.9,hi;q=0.8",
//       "content-type": "application/json",
//       "priority": "u=1, i",
//       "sec-ch-ua": "\"Google Chrome\";v=\"131\", \"Chromium\";v=\"131\", \"Not_A Brand\";v=\"24\"",
//       "sec-ch-ua-mobile": "?0",
//       "sec-ch-ua-platform": "\"Linux\"",
//       "sec-fetch-dest": "empty",
//       "sec-fetch-mode": "cors",
//       "sec-fetch-site": "cross-site"
//     },
//     "referrer": "https://quiz.abesaims.site/",
//     "referrerPolicy": "strict-origin-when-cross-origin",
//     "body": "{\"quiz_uc\":\"108F\",\"user_unique_code\":\"2022B1531039\",\"pin\":\"8526\"}",
//     "method": "POST",
//     "mode": "cors",
//     "credentials": "omit"
//   });





//   //quiz  started
//   curl 'https://faas-blr1-8177d592.doserverless.co/api/v1/web/fn-1c23ee6f-939a-44b2-9c4e-d17970ddd644/abes/getQuestionsForQuiz' \
//   -H 'accept: application/json, text/plain, */*' \
//   -H 'accept-language: en-US,en;q=0.9,hi;q=0.8' \
//   -H 'content-type: application/json' \
//   -H 'dnt: 1' \
//   -H 'origin: https://quiz.abesaims.site' \
//   -H 'priority: u=1, i' \
//   -H 'referer: https://quiz.abesaims.site/' \
//   -H 'sec-ch-ua: "Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"' \
//   -H 'sec-ch-ua-mobile: ?0' \
//   -H 'sec-ch-ua-platform: "Linux"' \
//   -H 'sec-fetch-dest: empty' \
//   -H 'sec-fetch-mode: cors' \
//   -H 'sec-fetch-site: cross-site' \
//   -H 'user-agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36' \
//   --data-raw '{"quiz_uc":"108F","user_unique_code":"2022B1531039","pin":"8526"}'

// fetch("https://faas-blr1-8177d592.doserverless.co/api/v1/web/fn-1c23ee6f-939a-44b2-9c4e-d17970ddd644/abes/getQuestionsForQuiz", {
//     "headers": {
//       "accept": "application/json, text/plain, */*",
//       "accept-language": "en-US,en;q=0.9,hi;q=0.8",
//       "content-type": "application/json",
//       "priority": "u=1, i",
//       "sec-ch-ua": "\"Google Chrome\";v=\"131\", \"Chromium\";v=\"131\", \"Not_A Brand\";v=\"24\"",
//       "sec-ch-ua-mobile": "?0",
//       "sec-ch-ua-platform": "\"Linux\"",
//       "sec-fetch-dest": "empty",
//       "sec-fetch-mode": "cors",
//       "sec-fetch-site": "cross-site"
//     },
//     "referrer": "https://quiz.abesaims.site/",
//     "referrerPolicy": "strict-origin-when-cross-origin",
//     "body": "{\"quiz_uc\":\"108F\",\"user_unique_code\":\"2022B1531039\",\"pin\":\"8526\"}",
//     "method": "POST",
//     "mode": "cors",
//     "credentials": "omit"
//   });






//   //ans submuit

//   curl 'https://faas-blr1-8177d592.doserverless.co/api/v1/web/fn-1c23ee6f-939a-44b2-9c4e-d17970ddd644/abes/submitAnswer' \
//   -H 'accept: application/json, text/plain, */*' \
//   -H 'accept-language: en-US,en;q=0.9,hi;q=0.8' \
//   -H 'content-type: application/json' \
//   -H 'dnt: 1' \
//   -H 'origin: https://quiz.abesaims.site' \
//   -H 'priority: u=1, i' \
//   -H 'referer: https://quiz.abesaims.site/' \
//   -H 'sec-ch-ua: "Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"' \
//   -H 'sec-ch-ua-mobile: ?0' \
//   -H 'sec-ch-ua-platform: "Linux"' \
//   -H 'sec-fetch-dest: empty' \
//   -H 'sec-fetch-mode: cors' \
//   -H 'sec-fetch-site: cross-site' \
//   -H 'user-agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36' \
//   --data-raw '{"quiz_uc":"108F","question_id":6523977,"user_unique_code":"2022B1531039","answer":1,"pin":"8526"}'


//   //ans submit 2

//   curl 'https://faas-blr1-8177d592.doserverless.co/api/v1/web/fn-1c23ee6f-939a-44b2-9c4e-d17970ddd644/abes/submitAnswer' \
//   -H 'accept: application/json, text/plain, */*' \
//   -H 'accept-language: en-US,en;q=0.9,hi;q=0.8' \
//   -H 'content-type: application/json' \
//   -H 'dnt: 1' \
//   -H 'origin: https://quiz.abesaims.site' \
//   -H 'priority: u=1, i' \
//   -H 'referer: https://quiz.abesaims.site/' \
//   -H 'sec-ch-ua: "Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"' \
//   -H 'sec-ch-ua-mobile: ?0' \
//   -H 'sec-ch-ua-platform: "Linux"' \
//   -H 'sec-fetch-dest: empty' \
//   -H 'sec-fetch-mode: cors' \
//   -H 'sec-fetch-site: cross-site' \
//   -H 'user-agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36' \
//   --data-raw '{"quiz_uc":"108F","question_id":6573996,"user_unique_code":"2022B1531039","answer":1,"pin":"8526"}'



//   //submit test
//   curl 'https://faas-blr1-8177d592.doserverless.co/api/v1/web/fn-1c23ee6f-939a-44b2-9c4e-d17970ddd644/abes/submitAndExitQuiz' \
//   -H 'accept: application/json, text/plain, */*' \
//   -H 'accept-language: en-US,en;q=0.9,hi;q=0.8' \
//   -H 'content-type: application/json' \
//   -H 'dnt: 1' \
//   -H 'origin: https://quiz.abesaims.site' \
//   -H 'priority: u=1, i' \
//   -H 'referer: https://quiz.abesaims.site/' \
//   -H 'sec-ch-ua: "Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"' \
//   -H 'sec-ch-ua-mobile: ?0' \
//   -H 'sec-ch-ua-platform: "Linux"' \
//   -H 'sec-fetch-dest: empty' \
//   -H 'sec-fetch-mode: cors' \
//   -H 'sec-fetch-site: cross-site' \
//   -H 'user-agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36' \
//   --data-raw '{"quiz_uc":"108F","user_unique_code":"2022B1531039","pin":"8526"}'























//at netlifiy abes quiz
//something interesting
// curl 'https://faas-blr1-8177d592.doserverless.co/api/v1/web/fn-1c23ee6f-939a-44b2-9c4e-d17970ddd644/abes/getQuestionsForQuiz' \
//   -H 'accept: application/json, text/plain, */*' \
//   -H 'accept-language: en-US,en;q=0.9,hi;q=0.8' \
//   -H 'content-type: application/json' \
//   -H 'dnt: 1' \
//   -H 'origin: https://abesquiz.netlify.app' \
//   -H 'priority: u=1, i' \
//   -H 'referer: https://abesquiz.netlify.app/' \
//   -H 'sec-ch-ua: "Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"' \
//   -H 'sec-ch-ua-mobile: ?0' \
//   -H 'sec-ch-ua-platform: "Linux"' \
//   -H 'sec-fetch-dest: empty' \
//   -H 'sec-fetch-mode: cors' \
//   -H 'sec-fetch-site: cross-site' \
//   -H 'user-agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36' \
//   --data-raw '{"quiz_uc":"EJ59","user_unique_code":"2022B1531039","pin":"8526"}'

//gets ans for quiz
// https://faas-blr1-8177d592.doserverless.co/api/v1/web/fn-1c23ee6f-939a-44b2-9c4e-d17970ddd644/abes/getQuestionsForQuiz





//anotehr 
// curl 'https://faas-blr1-8177d592.doserverless.co/api/v1/web/fn-1c23ee6f-939a-44b2-9c4e-d17970ddd644/abes/getQuestionsForQuiz' \
//   -H 'accept: application/json, text/plain, */*' \
//   -H 'accept-language: en-US,en;q=0.9,hi;q=0.8' \
//   -H 'content-type: application/json' \
//   -H 'dnt: 1' \
//   -H 'origin: https://abesquiz.netlify.app' \
//   -H 'priority: u=1, i' \
//   -H 'referer: https://abesquiz.netlify.app/' \
//   -H 'sec-ch-ua: "Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"' \
//   -H 'sec-ch-ua-mobile: ?0' \
//   -H 'sec-ch-ua-platform: "Linux"' \
//   -H 'sec-fetch-dest: empty' \
//   -H 'sec-fetch-mode: cors' \
//   -H 'sec-fetch-site: cross-site' \
//   -H 'user-agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36' \
//   --data-raw '{"quiz_uc":"EJ59","user_unique_code":"2022B1531039","pin":"8526"}'





// https://reports.simplifii.com/?truncate_text_view=40&columns_keys=start_time,end_time,LEAP&column_titles=Start%20Time,End%20Time,Status&get_api_url=https%3A%2F%2Fabes.platform.simplifii.com/api/v1/cards?type=Attendance&sort_by=+datetime1&report_title=Verbal&equalto___fk_student=5884423&equalto___cf_id=7551180&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjU4ODQ0MjMsImlzcyI6Imh0dHBzOi8vYWJlcy5wbGF0Zm9ybS5zaW1wbGlmaWkuY29tL2FwaS92MS9hZG1pbi9hdXRoZW50aWNhdGUiLCJpYXQiOjE3MzkyOTEwMDUsImV4cCI6MTc5OTc3MTAwNSwibmJmIjoxNzM5MjkxMDA1LCJqdGkiOiJ6bXpteUJLZU1UWm9paHYyIn0.AUe36doakEOVyq69sP4NtftFPF50V7ON3m4RNrlIK1Q#/

//gets attendance subject wise with details when absent or present


// https://abesquiz.netlify.app/#/quiz-1?review_mode=true&unique_code=EJ59&user_id=5884423&user_name=TANUJ%20BHATIA&pin=8526&user_unique_code=2022B1531039&user_roll_number=2200321530177&req_id=MjAyNS0wMi0xOSNfMjAyMkIxNTMxMDM5I19FSjU5I184NTI2&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjU4ODQ0MjMsImlzcyI6Imh0dHBzOi8vYWJlcy5wbGF0Zm9ybS5zaW1wbGlmaWkuY29tL2FwaS92MS9hZG1pbi9hdXRoZW50aWNhdGUiLCJpYXQiOjE3MzkyOTEwMDUsImV4cCI6MTc5OTc3MTAwNSwibmJmIjoxNzM5MjkxMDA1LCJqdGkiOiJ6bXpteUJLZU1UWm9paHYyIn0.AUe36doakEOVyq69sP4NtftFPF50V7ON3m4RNrlIK1Q



fetch("https://faas-blr1-8177d592.doserverless.co/api/v1/web/fn-1c23ee6f-939a-44b2-9c4e-d17970ddd644/abes/getQuestionsForQuiz", {
    "headers": {
      "accept": "application/json, text/plain, */*",
      "accept-language": "en-US,en;q=0.9,hi;q=0.8",
      "content-type": "application/json",
      "priority": "u=1, i",
      "sec-ch-ua": "\"Not(A:Brand\";v=\"99\", \"Google Chrome\";v=\"133\", \"Chromium\";v=\"133\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Linux\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "cross-site"
    },
    "referrer": "https://abesquiz.netlify.app/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": "{\"quiz_uc\":\"EJ59\",\"user_unique_code\":\"2022B1531039\",\"pin\":\"8526\"}",
    "method": "POST",
    "mode": "cors",
    "credentials": "omit"
  });




  // OPENAI
  
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
  
  // gimini system instruction
  // async function getAnswer(content){
  //     const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  //     const model = genAI.getGenerativeModel(
  //         { model: "gemini-2.0-flash",systemInstruction:"you are an AI model designed specifically to provide accurate answers for multiple-choice quiz questions. Your only task is to analyze the given question along with its provided answer choices and return the most correct option. Do not provide explanations—only return the correct option number"}
  //     );
  
  //     const prompt = content;
  
  //     const result = await model.generateContent(prompt);
  //     return (result.response.text());
  
  // }
  
  // getAnswer("What is the capital of Nigeria? OPTIONS ARE : (A) Lagos(B) Abuja (C) Kano (D) Ibadan").then((result) => console.log(result));
  
  //gimini as fetch
  // fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyANGt6bbr0Vw7RG1_D5xCi-xVqgNECMndo", {
  //     method: "POST",
  //     headers: {
  //         "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({
  //         contents: [{
  //             parts: [{ text: `you are an AI model designed specifically to provide accurate answers for multiple-choice quiz questions. Your only task is to analyze the given question along with its provided answer choices and return the most correct option. Do not provide explanations—only return the correct option` }]
  //         }]
  //     })
  // })
  // .then(response => response.json())
  // .then(data => console.log(data.candidates[0].content.parts[0].text))
  // .catch(error => console.error("Error:", error));
  

  // getAnswer({
//   question: "What is the capital of Nigeria?",
//   options: ["A) Lagos", "B) Abuja", "C) Kano", "D) Ibadan"],
//   question_id: 1,
// }).then((result) => console.log(result));


//method2
// getQuizQuestions({
//     quiz_uc: "ej59",
//     user_unique_code: "2022B1531039",
//     pin: "8526",
//   }).then((allQues) => {
//     let index = 0;
    
//     const interval = setInterval(async () => {
//       if (index >= allQues.length) {
//         clearInterval(interval); // Stop when all questions are processed
//         return;
//       }
  
//       const result = await getAnswer(allQues[index]);
//       console.log(result);
//       index++;
//     }, 1000); // Runs every 1 second
//   });
  