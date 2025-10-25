// src/components/NavBar.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function NavBar({ user, setUser }) {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("quizUser");
    setUser(null);
    navigate("/login");
  }

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">Dosha Quiz</Link>
      </div>
      <div className="nav-links">
        {user ? (
          <>
            <Link to="/quiz">Quiz</Link>
            <Link to="/result">Result</Link>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
}
