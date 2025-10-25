// src/components/Question.js

import React from "react";

function Question({ question, options, selected, onChange }) {
  return (
    <div className="question-block">
      <h3>{question}</h3>
      <div className="options">
        {options.map((option) => (
          <label key={option.value} className="option">
            <input
              type="radio"
              name={question}
              value={option.value}
              checked={selected === option.value}
              onChange={() => onChange(option.value)}
            />
            {option.label}
          </label>
        ))}
      </div>
    </div>
  );
}

export default Question;
