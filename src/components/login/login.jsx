import React from 'react';
import { Link } from 'react-router-dom';
import './login.scss';

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="login-page__image"></div>
      <div className="login-page__form-container">
        <form className="login-page__form">
          <h2 className="login-page__title">Welcome back</h2>
          <p className="login-page__subtitle">New to SimpleChef? <Link to="/signup"><span className="span">Create an account.</span></Link></p>
          <div className="login-page__field">
            <label htmlFor="email" className="login-page__label">Email</label>
            <input type="email" id="email" className="login-page__input" />
          </div>
          <div className="login-page__field">
            <label htmlFor="password" className="login-page__label">Password</label>
            <input type="password" id="password" className="login-page__input" />
          </div>
          <button type="submit" className="login-page__button">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
