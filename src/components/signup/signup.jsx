import React from 'react';
import { Link } from 'react-router-dom';
import './signup.scss';

const SignupPage = () => {
  return (
    <div className="login-page">
      <div className="login-page__image"></div>
      <div className="login-page__form-container">
        <form className="login-page__form">
          <h2 className="login-page__title">Create an account</h2>
          <p className="login-page__subtitle">Already have an account? <Link to="/login"><span className="span">Sign In</span></Link></p>
          <div className="login-page__field">
            <label htmlFor="name" className="login-page__label">Full Name</label>
            <input type="name" id="email" className="login-page__input" />
          </div>
          <div className="login-page__field">
            <label htmlFor="email" className="login-page__label">Email</label>
            <input type="email" id="email" className="login-page__input" />
          </div>
          <div className="login-page__field">
            <label htmlFor="password" className="login-page__label">Password</label>
            <input type="password" id="password" className="login-page__input" />
          </div>
          <button type="submit" className="login-page__button">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
