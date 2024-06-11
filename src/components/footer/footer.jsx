import React from "react";
import { IconContext } from "react-icons";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__logo-section">
          <div className="footer__logo">Simple Chef</div>
          <p className="footer__description">
            Your quick-fix kitchen. Discover three-ingredient recipes, savor
            simplicity, and dive into delicious discussions. Join us today and
            relish the taste of effortless cooking!”
          </p>
        </div>
        <div className="footer__links-section">
          <div className="footer__column">
            <h4 className="footer__column-title">Product</h4>
            <ul className="footer__list">
              <li className="footer__item">
                <a href="#link1" className="footer__link">
                  Home
                </a>
              </li>
              <li className="footer__item">
                <a href="#link2" className="footer__link">
                  Blog
                </a>
              </li>
              <li className="footer__item">
                <a href="#link3" className="footer__link">
                  Recipes
                </a>
              </li>
              <li className="footer__item">
                <a href="#link4" className="footer__link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__column">
            <h4 className="footer__column-title">Company</h4>
            <ul className="footer__list">
              <li className="footer__item">
                <a href="#link1" className="footer__link">
                  About
                </a>
              </li>
              <li className="footer__item">
                <a href="#link2" className="footer__link">
                  Careers
                </a>
              </li>
              <li className="footer__item">
                <a href="#link3" className="footer__link">
                  News
                </a>
              </li>
              <li className="footer__item">
                <a href="#link4" className="footer__link">
                  Newsletter
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__column">
            <h4 className="footer__column-title">Legal</h4>
            <ul className="footer__list">
              <li className="footer__item">
                <a href="#link1" className="footer__link">
                  Terms
                </a>
              </li>
              <li className="footer__item">
                <a href="#link2" className="footer__link">
                  Privacy
                </a>
              </li>
              <li className="footer__item">
                <a href="#link3" className="footer__link">
                  Licenses
                </a>
              </li>
              <li className="footer__item">
                <a href="#link4" className="footer__link">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__copyright">
          &copy; {new Date().getFullYear()} Simple Chef. All rights reserved.
        </div>
        <IconContext.Provider value={{ size: "1.5em" }}>
          <div className="footer__social-links">
            <a href="#facebook" className="footer__social-link">
              <FaFacebook />
            </a>
            <a href="#twitter" className="footer__social-link">
              <FaTwitter />
            </a>
            <a href="#instagram" className="footer__social-link">
              <FaInstagram />
            </a>
            <a href="#pinterest" className="footer__social-link">
              <FaPinterest />
            </a>
            <a href="#youtube" className="footer__social-link">
              <FaYoutube />
            </a>
          </div>
        </IconContext.Provider>
      </div>
    </footer>
  );
};

export default Footer;
