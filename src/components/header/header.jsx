import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo"><a href="/">Simple Chef</a></div>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <a href="/recipes" className="header__nav-link">
              Recipes
            </a>
          </li>
          <li className="header__nav-item">
            <a href="/categories" className="header__nav-link">
              Categories
            </a>
          </li>
          <li className="header__nav-item">
            <a href="/upload" className="header__nav-link">
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
