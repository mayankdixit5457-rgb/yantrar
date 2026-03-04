import { useState } from "react";
import { useUser } from "../lib/context/user";
import { Link } from "react-router-dom";
import "./Auth.css";

export function Login() {
  const user = useUser();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await user.login(email, password);
    } catch (err) {
      setError(err.message || "Invalid email or password");
    }
  };

  return (
    <div className="auth-container solo-page">
      <div className="auth-card">
        <div className="auth-header">
          <h1>Welcome Back</h1>
          <p>Please enter your details to sign in</p>
        </div>

        {error && <div className="auth-error">{error}</div>}

        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              placeholder="name@company.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>

          <button className="auth-btn primary" type="submit">
            Sign In
          </button>
        </form>

        <div className="auth-divider">
          <span>OR</span>
        </div>

        <div className="auth-footer">
          <p>Don't have an account?</p>
          <Link to="/signup" className="signup-link">
            Create an account for free
          </Link>
        </div>
      </div>
    </div>
  );
}
