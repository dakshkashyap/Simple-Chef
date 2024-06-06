import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">Logo</div>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <a href="#home" className="header__nav-link">
              Recipes
            </a>
          </li>
          <li className="header__nav-item">
            <a href="#about" className="header__nav-link">
              Categories
            </a>
          </li>
          <li className="header__nav-item">
            <a href="#contact" className="header__nav-link">
              Post a Recipe
            </a>
          </li>
        </ul>
      </nav>
      <div className="header__buttons">
        <button className="header__button header__button--login">Login</button>
        <button className="header__button header__button--signup">
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Header;
