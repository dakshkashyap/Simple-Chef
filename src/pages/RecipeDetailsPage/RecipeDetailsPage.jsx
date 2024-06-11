import React, { useEffect, useState } from "react";
import axios from "axios";
import { IconContext } from "react-icons";
import { useParams } from "react-router-dom";
import { BsStopwatch } from "react-icons/bs";
import { FaUtensils } from "react-icons/fa6";
import "./RecipeDetailsPage.scss";
import avatar from "../../assets/Images/avatar.png";

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

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

    axios
      .get(`http://localhost:8080/recipes/${id}/comments`)
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => {
        console.error("Error fetching comments:", error);
      });
  }, [id]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/comments", {
        recipe_id: id,
        name,
        comment,
      })
      .then((response) => {
        setComments([...comments, { id: response.data.id, name, comment }]);
        setName("");
        setComment("");
      })
      .catch((error) => {
        console.error("Error submitting comment:", error);
      });
  };

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
            <div className="recipe-details__item">
              <BsStopwatch className="recipe-details__icon" />
              <p className="recipe-details__icon-title">Prep time</p>
              <p className="recipe-details__time">{recipe.prep_time}</p>
            </div>
            <div className="recipe-details__item">
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
      <div className="recipe-details__comments">
        <h2 className="recipe-details__comments-title">Comments</h2>
        <form
          onSubmit={handleCommentSubmit}
          className="recipe-details__comment-form"
        >
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="recipe-details__comment-input"
          />
          <textarea
            placeholder="Your Comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
            className="recipe-details__comment-textarea"
          />
          <button type="submit" className="recipe-details__comment-button">
            Submit
          </button>
        </form>
        <div className="recipe-details__comment-list">
          {comments.map((comment) => (
            <div key={comment.id} className="recipe-details__comment-item">
              <img
                src={avatar}
                alt="avatar"
                className="recipe-details__comment-avatar"
              />
              <div className="recipe-details__comment-content">
                <p className="recipe-details__comment-name">{comment.name}</p>
                <p className="recipe-details__comment-text">
                  {comment.comment}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
