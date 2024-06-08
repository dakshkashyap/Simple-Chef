// import React from 'react';
// import { Link } from 'react-router-dom';
// import './signup.scss';

// const SignupPage = () => {
//   return (
//     <div className="login-page">
//       <div className="login-page__image"></div>
//       <div className="login-page__form-container">
//         <form className="login-page__form">
//           <h2 className="login-page__title">Create an account</h2>
//           <p className="login-page__subtitle">Already have an account? <Link to="/login"><span className="span">Sign In</span></Link></p>
//           <div className="login-page__field">
//             <label htmlFor="name" className="login-page__label">Full Name</label>
//             <input type="name" id="email" className="login-page__input" />
//           </div>
//           <div className="login-page__field">
//             <label htmlFor="email" className="login-page__label">Email</label>
//             <input type="email" id="email" className="login-page__input" />
//           </div>
//           <div className="login-page__field">
//             <label htmlFor="password" className="login-page__label">Password</label>
//             <input type="password" id="password" className="login-page__input" />
//           </div>
//           <button type="submit" className="login-page__button">Sign Up</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignupPage;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./signup.scss";

const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State for managing error messages
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(""); // Clear any previous error messages

    try {
      const response = await axios.post("http://localhost:8080/signup", {
        name,
        email,
        password,
      });

      if (response.status === 201) {
        // Redirect to login page
        navigate("/login");
      } else {
        setError("Signup failed. Please try again.");
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
          <h2 className="login-page__title">Create an account</h2>
          <p className="login-page__subtitle">
            Already have an account?{" "}
            <Link to="/login">
              <span className="span">Sign In</span>
            </Link>
          </p>
          {error && <p className="login-page__error">{error}</p>}
          <div className="login-page__field">
            <label htmlFor="name" className="login-page__label">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="login-page__input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
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
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
