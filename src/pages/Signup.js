// src/pages/Signup.js
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FiUser, FiLock } from "react-icons/fi";

function Signup({ setUser }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    setError(""); setSuccess("");
    if (pass.length < 4) {
      setError("Password must be at least 4 characters.");
      return;
    }
    const users = JSON.parse(localStorage.getItem("quizUsers")) || [];
    if (users.find((u) => u.email === email.trim())) {
      setError("Email already registered. Please login.");
      return;
    }
    const newUser = { email: email.trim(), pass };
    users.push(newUser);
    localStorage.setItem("quizUsers", JSON.stringify(users));
    localStorage.setItem("quizUser", JSON.stringify(newUser));
    setUser(newUser);
    setSuccess("Signup successful! Redirecting...");
    setTimeout(() => navigate("/"), 1200); // redirect after message
  };

  return (
    <div className="page auth-page">
      <div className="auth-card">
        <h2>Signup</h2>
        <form onSubmit={handleSignup}>
          <div className="input-icon">
            <FiUser />
            <input
              type="email"
              required
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="username"
            />
          </div>
          <div className="input-icon">
            <FiLock />
            <input
              type="password"
              required
              placeholder="Password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              autoComplete="new-password"
            />
          </div>
          <button type="submit">Signup</button>
        </form>
        {error && <p className="form-error">{error}</p>}
        {success && <p style={{ color: "#28a476", fontWeight: "bold" }}>{success}</p>}
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}
export default Signup;
