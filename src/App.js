// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NavBar from "./components/Navbar";      // import NavBar
import "./App.css";

function App() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("quizUser")) || null
  );

  return (
    <Router>
      <NavBar user={user} setUser={setUser} /> {/* Add NavBar */}
      <div className="app-container">
        <Routes>
          <Route path="/" element={user ? <Home user={user} /> : <Navigate to="/login" />} />
          <Route path="/quiz" element={user ? <Quiz /> : <Navigate to="/login" />} />
          <Route path="/result" element={user ? <Result /> : <Navigate to="/login" />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/signup" element={<Signup setUser={setUser} />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
