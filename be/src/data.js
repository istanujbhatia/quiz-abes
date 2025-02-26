fetch("https://faas-blr1-8177d592.doserverless.co/api/v1/web/fn-1c23ee6f-939a-44b2-9c4e-d17970ddd644/abes/fetchQuizDetails", {
    "headers": {
      "accept": "application/json, text/plain, */*",
      "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
      "content-type": "application/json",
      "priority": "u=1, i",
      "sec-ch-ua": "\"Not(A:Brand\";v=\"99\", \"Google Chrome\";v=\"133\", \"Chromium\";v=\"133\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "cross-site"
    },
    "referrer": "https://quiz.abesaims.site/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": "{\"quiz_uc\":\"QT5H\",\"user_unique_code\":\"2022B1531039\",\"pin\":\"8526\"}",
    "method": "POST",
    "mode": "cors",
    "credentials": "omit"
  })

  fetch("https://faas-blr1-8177d592.doserverless.co/api/v1/web/fn-1c23ee6f-939a-44b2-9c4e-d17970ddd644/abes/getQuestionsForQuiz", {
    "headers": {
      "accept": "application/json, text/plain, */*",
      "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
      "content-type": "application/json",
      "priority": "u=1, i",
      "sec-ch-ua": "\"Not(A:Brand\";v=\"99\", \"Google Chrome\";v=\"133\", \"Chromium\";v=\"133\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "cross-site"
    },
    "referrer": "https://quiz.abesaims.site/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": "{\"quiz_uc\":\"QT5H\",\"user_unique_code\":\"2022B1531039\",\"pin\":\"8526\"}",
    "method": "POST",
    "mode": "cors",
    "credentials": "omit"
  }).then((res)=>{
    return res.json()
  }).then((data)=>{
    console.log(data);
    

  })

  {
    "msg": "",
    "time_now": "2025-02-25 15:30:56",
    "start_time": "2025-02-25 15:30:00",
    "end_time": "2025-02-25 15:40:00",
    "response": {
        "data": [
            {
                "CO": "CO1",
                "id": 6067944,
                "type": "MSQ",
                "marks": 1,
                "options": [
                    "<pre>Process introduction</pre>",
                    "<pre>Process analysis</pre>",
                    "<pre>De-processification</pre>",
                    "<pre>Process distribution</pre>"
                ],
                "question": "<pre>Identify the sub-process of process improvement</pre>",
                "topic_name": "Categorization of Software Projects, Setting objectives",
                "bloom_level": "K1",
                "time_to_solve": 0.5,
                "submitted_answer": null,
                "multiple_correct": 0
            },
            {
                "CO": "CO1",
                "id": 6067940,
                "type": "MSQ",
                "marks": 1,
                "options": [
                    "<pre>very low</pre>",
                    "<pre>low</pre>",
                    "<pre>moderate</pre>",
                    "<pre>high</pre>"
                ],
                "question": "<pre>A 66.6% risk is considered as</pre>",
                "topic_name": "Categorization of Software Projects, Setting objectives",
                "bloom_level": "K1",
                "time_to_solve": 0.5,
                "submitted_answer": null,
                "multiple_correct": 0
            },
            {
                "CO": "CO1",
                "id": 6067941,
                "type": "MSQ",
                "marks": 1,
                "options": [
                    "<pre>travel and training costs</pre>",
                    "<pre>hardware and software costs</pre>",
                    "<pre>effort costs (the costs of paying software engineers and managers)</pre>",
                    "<pre>all of the mentioned</pre>"
                ],
                "question": "<pre>Which of the following is/are main parameters that you should use when computing the costs of a software development project?</pre>",
                "topic_name": "Categorization of Software Projects, Setting objectives",
                "bloom_level": "K1",
                "time_to_solve": 0.5,
                "submitted_answer": null,
                "multiple_correct": 0
            },
            {
                "CO": "CO1",
                "id": 6067938,
                "type": "MSQ",
                "marks": 1,
                "options": [
                    "<pre>Keeping overall costs within budget</pre>",
                    "<pre>Delivering the software to the customer at the agreed time</pre>",
                    "<pre>Maintaining a happy and well-functioning development team</pre>",
                    "<pre>Avoiding customer complaints</pre>"
                ],
                "question": "<pre>Which of the following is not project management goal?</pre>",
                "topic_name": "Categorization of Software Projects, Setting objectives",
                "bloom_level": "K1",
                "time_to_solve": 0.5,
                "submitted_answer": null,
                "multiple_correct": 0
            },
            {
                "CO": "CO1",
                "id": 6067946,
                "type": "MSQ",
                "marks": 2,
                "options": [
                    "<pre>Planning process</pre>",
                    "<pre>Software scope</pre>",
                    "<pre>External hardware</pre>",
                    "<pre>Project complexity</pre>"
                ],
                "question": "<pre>What describes the data and control to be processed?</pre>",
                "topic_name": "Categorization of Software Projects, Setting objectives",
                "bloom_level": "K2",
                "time_to_solve": 0.5,
                "submitted_answer": null,
                "multiple_correct": 0
            },
            {
                "CO": "CO1",
                "id": 6067942,
                "type": "MSQ",
                "marks": 1,
                "options": [
                    "<pre>team</pre>",
                    "<pre>project</pre>",
                    "<pre>customers</pre>",
                    "<pre>project manager</pre>"
                ],
                "question": "<pre>Quality planning is the process of developing a quality plan fo</pre>",
                "topic_name": "Categorization of Software Projects, Setting objectives",
                "bloom_level": "K1",
                "time_to_solve": 0.5,
                "submitted_answer": null,
                "multiple_correct": 0
            },
            {
                "CO": "CO1",
                "id": 6067943,
                "type": "MSQ",
                "marks": 1,
                "options": [
                    "<pre>Internship management</pre>",
                    "<pre>Change management</pre>",
                    "<pre>Version management</pre>",
                    "<pre>System management</pre>"
                ],
                "question": "<pre>Which of the following is incorrect activity for the configuration management of a software system?</pre>",
                "topic_name": "Categorization of Software Projects, Setting objectives",
                "bloom_level": "K1",
                "time_to_solve": 0.5,
                "submitted_answer": null,
                "multiple_correct": 0
            },
            {
                "CO": "CO1",
                "id": 6067945,
                "type": "MSQ",
                "marks": 1,
                "options": [
                    "<pre>Project size</pre>",
                    "<pre>Planning process</pre>",
                    "<pre>Project complexity</pre>",
                    "<pre>Degree of structural uncertainty</pre>"
                ],
                "question": "<pre>Which of the following is an important factor that can affect the accuracy and efficacy of estimates?</pre>",
                "topic_name": "Categorization of Software Projects, Setting objectives",
                "bloom_level": "K1",
                "time_to_solve": 0.5,
                "submitted_answer": null,
                "multiple_correct": 0
            },
            {
                "CO": "CO1",
                "id": 6067939,
                "type": "MSQ",
                "marks": 1,
                "options": [
                    "<pre>Specification delays</pre>",
                    "<pre>Product competition</pre>",
                    "<pre>Testing</pre>",
                    "<pre>Staff turnover</pre>"
                ],
                "question": "<pre>Which of the following is not considered as a risk in project management?</pre>",
                "topic_name": "Categorization of Software Projects, Setting objectives",
                "bloom_level": "K1",
                "time_to_solve": 0.5,
                "submitted_answer": null,
                "multiple_correct": 0
            },
            {
                "CO": "CO1",
                "id": 6067947,
                "type": "MSQ",
                "marks": 1,
                "options": [
                    "<pre>JAD</pre>",
                    "<pre>CLASS</pre>",
                    "<pre>FAST</pre>",
                    "<pre>None of the mentioned</pre>"
                ],
                "question": "<pre>A number of independent investigators have developed a team-oriented approach to requirements gathering that can be applied to establish the scope of a project called</pre>",
                "topic_name": "Categorization of Software Projects, Setting objectives",
                "bloom_level": "K1",
                "time_to_solve": 0.5,
                "submitted_answer": null,
                "multiple_correct": 0
            }
        ]
    }
}




fetch("https://faas-blr1-8177d592.doserverless.co/api/v1/web/fn-1c23ee6f-939a-44b2-9c4e-d17970ddd644/abes/getQuestionsForQuiz", {
    "headers": {
      "accept": "application/json, text/plain, */*",
      "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
      "content-type": "application/json",
      "priority": "u=1, i",
      "sec-ch-ua": "\"Not(A:Brand\";v=\"99\", \"Google Chrome\";v=\"133\", \"Chromium\";v=\"133\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "cross-site"
    },
    "referrer": "https://quiz.abesaims.site/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": "{\"quiz_uc\":\"QT5H\",\"user_unique_code\":\"2022B1531169\",\"pin\":\"1111\"}",
    "method": "POST",
    "mode": "cors",
    "credentials": "omit"
  });



  {
    "msg": "",
    "time_now": "2025-02-25 15:35:33",
    "start_time": "2025-02-25 15:30:00",
    "end_time": "2025-02-25 15:40:00",
    "response": {
        "data": [
            {
                "CO": "CO1",
                "id": 6067947,
                "type": "MSQ",
                "marks": 1,
                "options": [
                    "<pre>JAD</pre>",
                    "<pre>CLASS</pre>",
                    "<pre>FAST</pre>",
                    "<pre>None of the mentioned</pre>"
                ],
                "question": "<pre>A number of independent investigators have developed a team-oriented approach to requirements gathering that can be applied to establish the scope of a project called</pre>",
                "topic_name": "Categorization of Software Projects, Setting objectives",
                "bloom_level": "K1",
                "time_to_solve": 0.5,
                "submitted_answer": {
                    "answer": 1,
                    "answered_on": 1740497445385
                },
                "multiple_correct": 0
            },
            {
                "CO": "CO1",
                "id": 6067945,
                "type": "MSQ",
                "marks": 1,
                "options": [
                    "<pre>Project size</pre>",
                    "<pre>Planning process</pre>",
                    "<pre>Project complexity</pre>",
                    "<pre>Degree of structural uncertainty</pre>"
                ],
                "question": "<pre>Which of the following is an important factor that can affect the accuracy and efficacy of estimates?</pre>",
                "topic_name": "Categorization of Software Projects, Setting objectives",
                "bloom_level": "K1",
                "time_to_solve": 0.5,
                "submitted_answer": {
                    "answer": 4,
                    "answered_on": 1740497462130
                },
                "multiple_correct": 0
            },
            {
                "CO": "CO1",
                "id": 6067938,
                "type": "MSQ",
                "marks": 1,
                "options": [
                    "<pre>Keeping overall costs within budget</pre>",
                    "<pre>Delivering the software to the customer at the agreed time</pre>",
                    "<pre>Maintaining a happy and well-functioning development team</pre>",
                    "<pre>Avoiding customer complaints</pre>"
                ],
                "question": "<pre>Which of the following is not project management goal?</pre>",
                "topic_name": "Categorization of Software Projects, Setting objectives",
                "bloom_level": "K1",
                "time_to_solve": 0.5,
                "submitted_answer": {
                    "answer": 4,
                    "answered_on": 1740497494496
                },
                "multiple_correct": 0
            },
            {
                "CO": "CO1",
                "id": 6067939,
                "type": "MSQ",
                "marks": 1,
                "options": [
                    "<pre>Specification delays</pre>",
                    "<pre>Product competition</pre>",
                    "<pre>Testing</pre>",
                    "<pre>Staff turnover</pre>"
                ],
                "question": "<pre>Which of the following is not considered as a risk in project management?</pre>",
                "topic_name": "Categorization of Software Projects, Setting objectives",
                "bloom_level": "K1",
                "time_to_solve": 0.5,
                "submitted_answer": {
                    "answer": 3,
                    "answered_on": 1740497521399
                },
                "multiple_correct": 0
            },
            {
                "CO": "CO1",
                "id": 6067946,
                "type": "MSQ",
                "marks": 2,
                "options": [
                    "<pre>Planning process</pre>",
                    "<pre>Software scope</pre>",
                    "<pre>External hardware</pre>",
                    "<pre>Project complexity</pre>"
                ],
                "question": "<pre>What describes the data and control to be processed?</pre>",
                "topic_name": "Categorization of Software Projects, Setting objectives",
                "bloom_level": "K2",
                "time_to_solve": 0.5,
                "submitted_answer": {
                    "answer": 2,
                    "answered_on": 1740497545394
                },
                "multiple_correct": 0
            },
            {
                "CO": "CO1",
                "id": 6067944,
                "type": "MSQ",
                "marks": 1,
                "options": [
                    "<pre>Process introduction</pre>",
                    "<pre>Process analysis</pre>",
                    "<pre>De-processification</pre>",
                    "<pre>Process distribution</pre>"
                ],
                "question": "<pre>Identify the sub-process of process improvement</pre>",
                "topic_name": "Categorization of Software Projects, Setting objectives",
                "bloom_level": "K1",
                "time_to_solve": 0.5,
                "submitted_answer": {
                    "answer": 2,
                    "answered_on": 1740497588397
                },
                "multiple_correct": 0
            },
            {
                "CO": "CO1",
                "id": 6067942,
                "type": "MSQ",
                "marks": 1,
                "options": [
                    "<pre>team</pre>",
                    "<pre>project</pre>",
                    "<pre>customers</pre>",
                    "<pre>project manager</pre>"
                ],
                "question": "<pre>Quality planning is the process of developing a quality plan fo</pre>",
                "topic_name": "Categorization of Software Projects, Setting objectives",
                "bloom_level": "K1",
                "time_to_solve": 0.5,
                "submitted_answer": {
                    "answer": 2,
                    "answered_on": 1740497605443
                },
                "multiple_correct": 0
            },
            {
                "CO": "CO1",
                "id": 6067940,
                "type": "MSQ",
                "marks": 1,
                "options": [
                    "<pre>very low</pre>",
                    "<pre>low</pre>",
                    "<pre>moderate</pre>",
                    "<pre>high</pre>"
                ],
                "question": "<pre>A 66.6% risk is considered as</pre>",
                "topic_name": "Categorization of Software Projects, Setting objectives",
                "bloom_level": "K1",
                "time_to_solve": 0.5,
                "submitted_answer": {
                    "answer": 4,
                    "answered_on": 1740497627584
                },
                "multiple_correct": 0
            },
            {
                "CO": "CO1",
                "id": 6067941,
                "type": "MSQ",
                "marks": 1,
                "options": [
                    "<pre>travel and training costs</pre>",
                    "<pre>hardware and software costs</pre>",
                    "<pre>effort costs (the costs of paying software engineers and managers)</pre>",
                    "<pre>all of the mentioned</pre>"
                ],
                "question": "<pre>Which of the following is/are main parameters that you should use when computing the costs of a software development project?</pre>",
                "topic_name": "Categorization of Software Projects, Setting objectives",
                "bloom_level": "K1",
                "time_to_solve": 0.5,
                "submitted_answer": {
                    "answer": 4,
                    "answered_on": 1740497652811
                },
                "multiple_correct": 0
            },
            {
                "CO": "CO1",
                "id": 6067943,
                "type": "MSQ",
                "marks": 1,
                "options": [
                    "<pre>Internship management</pre>",
                    "<pre>Change management</pre>",
                    "<pre>Version management</pre>",
                    "<pre>System management</pre>"
                ],
                "question": "<pre>Which of the following is incorrect activity for the configuration management of a software system?</pre>",
                "topic_name": "Categorization of Software Projects, Setting objectives",
                "bloom_level": "K1",
                "time_to_solve": 0.5,
                "submitted_answer": {
                    "answer": 1,
                    "answered_on": 1740497686901
                },
                "multiple_correct": 0
            }
        ]
    }
}