// src/pages/Home.js

import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page home">
      <h1>Ayurveda Dosha Quiz</h1>
      <p>
        Discover your Ayurvedic constitution (Prakriti) and get personalized health tips!
        Based on ancient Indian wisdom, this quiz will assess your physical, mental, and emotional traits.
      </p>
      <Link to="/quiz" className="btn">
        Start Quiz
      </Link>
    </div>
  );
}

export default Home;
