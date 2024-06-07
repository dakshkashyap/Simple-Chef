import React, { useEffect, useState } from "react";
import axios from "axios";
import { IconContext } from "react-icons";
import { useParams } from "react-router-dom";
import { BsStopwatch } from "react-icons/bs";
import { FaUtensils } from "react-icons/fa6";
import "./RecipeDetailsPage.scss";

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/recipes/${id}`)
      .then((response) => {
        setRecipe(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching recipe:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!recipe) {
    return <div>Error loading recipe details.</div>;
  }

  return (
    <div className="recipe-details">
      <div className="recipe-details__imgcontent">
        <img
          src={recipe.image_path}
          alt={recipe.title}
          className="recipe-details__image"
        />
        <div className="recipe-details__icons">
          <IconContext.Provider
            value={{ size: "2em", className: "global-class-name" }}
          >
            <div>
              <BsStopwatch className="recipe-details__icon" />
              <p className="recipe-details__icon-title">Prep time</p>
              <p className="recipe-details__time">{recipe.prep_time}</p>
            </div>
            <div>
              <FaUtensils className="recipe-details__icon" />
              <p className="recipe-details__icon-title">Serving</p>
              <p className="recipe-details__serves">{recipe.serves}</p>
            </div>
          </IconContext.Provider>
        </div>
      </div>
      <div className="recipe-details__content">
        <h1 className="recipe-details__title">{recipe.title}</h1>
        <p className="recipe-details__description">{recipe.description}</p>
        <p className="recipe-details__category">
          <strong>Category:</strong> {recipe.category}
        </p>
        <p className="recipe-details__cook-time">
          <strong>Cook Time:</strong> {recipe.cook_time}
        </p>
        <div className="recipe-details__rating">
          <strong>Rating:</strong> {recipe.rating} / 5
        </div>
        <h2 className="recipe-details__subheading">Ingredients</h2>
        <ul className="recipe-details__ingredients">
          {JSON.parse(recipe.ingredients).map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h2 className="recipe-details__subheading">Method</h2>
        <ol className="recipe-details__method">
          {JSON.parse(recipe.method).map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetails;
