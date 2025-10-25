// src/pages/Quiz.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { questions } from "../data";
import Question from "../components/Question";

function Quiz() {
  const [answers, setAnswers] = useState(Array(questions.length).fill(""));
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  const handleAnswer = (value) => {
    const updated = [...answers];
    updated[current] = value;
    setAnswers(updated);
  };

  const next = () => setCurrent((c) => c + 1);
  const prev = () => setCurrent((c) => c - 1);

  const submit = () => {
    localStorage.setItem("doshaQuizAnswers", JSON.stringify(answers));
    navigate("/result");
  };

  return (
    <div className="page quiz">
      <h2>Question {current + 1} of {questions.length}</h2>
      
      <Question
        question={questions[current].question}
        options={questions[current].options}
        selected={answers[current]}
        onChange={handleAnswer}
      />

      <div className="quiz-nav">
        <button onClick={prev} disabled={current === 0}>
          Prev
        </button>
        {current < questions.length - 1 ? (
          <button onClick={next} disabled={!answers[current]}>
            Next
          </button>
        ) : (
          <button onClick={submit} disabled={answers.includes("")}>
            See Result
          </button>
        )}
      </div>
    </div>
  );
}

export default Quiz;
