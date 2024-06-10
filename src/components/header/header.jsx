import React, { useContext, useState } from "react";
import AuthContext from "../../auth/AuthContext";
import "./header.scss";

const Header = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleAvatarClick = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <header className="header">
      <div className="header__logo">
        <a href="/">Simple Chef</a>
      </div>
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
        {isLoggedIn ? (
          <div className="header__avatar-container">
            <img
              src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=338&ext=jpg&ga=GA1.1.1141335507.1717891200&semt=ais_user"
              alt="Avatar"
              className="header__avatar"
              onClick={handleAvatarClick}
            />
            {showDropdown && (
              <div className="header__dropdown">
                <a href="/profile" className="header__dropdown-item">
                  Profile
                </a>
                <button className="header__dropdown-item" onClick={logout}>
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            <a href="/login" className="header__button header__button--login">
              Login
            </a>
            <a href="/signup" className="header__button header__button--signup">
              Sign Up
            </a>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
