// src/pages/Result.js

import React from "react";
import { useNavigate } from "react-router-dom";
import { doshaDescriptions, questions } from "../data";

function getDoshaResult(answers) {
  const counts = { vata: 0, pitta: 0, kapha: 0 };
  answers.forEach((ans) => {
    if (counts[ans] !== undefined) counts[ans] += 1;
  });
  const maxScore = Math.max(...Object.values(counts));
  const dominant = Object.keys(counts).filter(
    (k) => counts[k] === maxScore && maxScore !== 0
  );
  return { dominant, counts };
}

function Result() {
  const navigate = useNavigate();
  const stored = localStorage.getItem("doshaQuizAnswers");
  if (!stored) return <div>No data found. Please <button onClick={() => navigate("/quiz")}>take quiz</button> first.</div>;

  const answers = JSON.parse(stored);

  const { dominant, counts } = getDoshaResult(answers);

  return (
    <div className="page result">
      <h2>Your Dominant Dosha{dominant.length > 1 ? "s" : ""}: {dominant.map((d) => doshaDescriptions[d].title).join(" & ")}</h2>
      <div className="dosha-breakdown">
        <p>Scores: Vata {counts.vata}, Pitta {counts.pitta}, Kapha {counts.kapha}</p>
        {dominant.map((dosha) => (
          <div key={dosha} className="dosha-detail">
            <h3>{doshaDescriptions[dosha].title}</h3>
            <p>{doshaDescriptions[dosha].description}</p>
            <ul>
              {doshaDescriptions[dosha].tips.map((tip, i) => <li key={i}>{tip}</li>)}
            </ul>
          </div>
        ))}
      </div>
      <button onClick={() => navigate("/quiz")}>Retake Quiz</button>
    </div>
  );
}

export default Result;
