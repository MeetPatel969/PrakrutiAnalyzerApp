// src/pages/Login.js
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FiUser, FiLock } from "react-icons/fi";

function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("quizUsers")) || [];
    const found = users.find(
      (u) => u.email === email.trim() && u.pass === pass
    );
    if (found) {
      localStorage.setItem("quizUser", JSON.stringify(found));
      setUser(found);
      navigate("/");
    } else {
      setError("❌ Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="page auth-page">
      <div className="auth-card">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="input-icon">
            <FiUser />
            <input type="email" required placeholder="Email"
              value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="input-icon">
            <FiLock />
            <input type="password" required placeholder="Password"
              value={pass} onChange={(e) => setPass(e.target.value)} />
          </div>
          <button type="submit">Login</button>
        </form>
        {error && <p className="form-error">{error}</p>}
        <p>
          No account? <Link to="/signup">Signup</Link>
        </p>
      </div>
    </div>
  );
}
export default Login;
