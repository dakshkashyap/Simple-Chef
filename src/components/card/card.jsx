import React from "react";
import { IconContext } from "react-icons";
import { FcLike } from "react-icons/fc";
import "./card.scss";

const RecipeCard = ({ image, title, description, rating, link }) => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span
          key={i}
          className={`recipe-card__star ${
            i < rating ? "recipe-card__star--filled" : ""
          }`}
        >
          &#9733;
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="recipe-card">
      <IconContext.Provider value={{ size: "2em" }}>
        <div className="recipe-card__icons">
          <span className="recipe-card__icon recipe-card__icon--like">
            <FcLike />
          </span>
        </div>
      </IconContext.Provider>
      <img src={image} alt={title} className="recipe-card__image" />
      <div className="recipe-card__content">
        <h3 className="recipe-card__title">{title}</h3>
        <p className="recipe-card__description">{description}</p>
        <div className="recipe-card__rating">{renderStars(rating)}</div>
        <a href={link} className="recipe-card__cta">
          View Details
        </a>
      </div>
    </div>
  );
};

export default RecipeCard;
