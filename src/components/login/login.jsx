import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./login.scss";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false); // State for managing success notification
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSuccess(false);

    try {
      const response = await axios.post("http://localhost:8080/login", {
        email,
        password,
      });

      if (response.status === 200) {
        // Save the token in localStorage
        localStorage.setItem("token", response.data.token);
        setSuccess(true);
        setTimeout(() => {
          navigate("/upload");
        }, 2000); // 2-second delay for showing success notification
      } else {
        setError("Login failed. Please try again.");
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setError(error.response.data.message); // Display error message from the server
      } else {
        setError("There was an error. Please try again.");
      }
      console.error("There was an error!", error);
    }
  };

  return (
    <div className="login-page">
      <div className="login-page__image"></div>
      <div className="login-page__form-container">
        <form className="login-page__form" onSubmit={handleSubmit}>
          <h2 className="login-page__title">Welcome back</h2>
          <p className="login-page__subtitle">
            New to SimpleChef?{" "}
            <Link to="/signup">
              <span className="span">Create an account.</span>
            </Link>
          </p>
          {error && <p className="login-page__error">{error}</p>}
          {success && (
            <p className="login-page__success">
              Logged in successfully! Redirecting...
            </p>
          )}
          <div className="login-page__field">
            <label htmlFor="email" className="login-page__label">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="login-page__input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="login-page__field">
            <label htmlFor="password" className="login-page__label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="login-page__input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-page__button">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
