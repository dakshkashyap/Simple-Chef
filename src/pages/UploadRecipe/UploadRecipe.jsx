import React, { useState } from 'react';
import axios from 'axios';
import './UploadRecipe.scss';

const UploadRecipe = () => {
  const [recipe, setRecipe] = useState({
    title: '',
    description: '',
    serves: '',
    prep_time: '',
    cook_time: '',
    ingredients: '',
    method: '',
    category: '',
    rating: '',
    image_path: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleImageChange = (e) => {
    setRecipe({ ...recipe, image_path: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(recipe).forEach(key => {
      formData.append(key, recipe[key]);
    });

    try {
      await axios.post('http://localhost:8080/recipes', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert('Recipe uploaded successfully!');
    } catch (error) {
      console.error('Error uploading recipe:', error);
      alert('Failed to upload recipe.');
    }
  };

  return (
    <div className="upload-recipe">
      <form onSubmit={handleSubmit} className="upload-recipe__form">
        <h1 className="upload-recipe__title">Upload Recipe</h1>
        <label className="upload-recipe__label">
          Title:
          <input
            type="text"
            name="title"
            value={recipe.title}
            onChange={handleChange}
            className="upload-recipe__input"
          />
        </label>
        <label className="upload-recipe__label">
          Description:
          <textarea
            name="description"
            value={recipe.description}
            onChange={handleChange}
            className="upload-recipe__input"
          />
        </label>
        <label className="upload-recipe__label">
          Serves:
          <input
            type="text"
            name="serves"
            value={recipe.serves}
            onChange={handleChange}
            className="upload-recipe__input"
          />
        </label>
        <label className="upload-recipe__label">
          Prep Time:
          <input
            type="text"
            name="prep_time"
            value={recipe.prep_time}
            onChange={handleChange}
            className="upload-recipe__input"
          />
        </label>
        <label className="upload-recipe__label">
          Cook Time:
          <input
            type="text"
            name="cook_time"
            value={recipe.cook_time}
            onChange={handleChange}
            className="upload-recipe__input"
          />
        </label>
        <label className="upload-recipe__label">
          Ingredients:
          <textarea
            name="ingredients"
            value={recipe.ingredients}
            onChange={handleChange}
            className="upload-recipe__input"
          />
        </label>
        <label className="upload-recipe__label">
          Method:
          <textarea
            name="method"
            value={recipe.method}
            onChange={handleChange}
            className="upload-recipe__input"
          />
        </label>
        <label className="upload-recipe__label">
          Category:
          <input
            type="text"
            name="category"
            value={recipe.category}
            onChange={handleChange}
            className="upload-recipe__input"
          />
        </label>
        <label className="upload-recipe__label">
          Rating:
          <input
            type="number"
            name="rating"
            value={recipe.rating}
            onChange={handleChange}
            className="upload-recipe__input"
            min="0"
            max="5"
            step="0.1"
          />
        </label>
        <label className="upload-recipe__label">
          Image:
          <input
            type="file"
            name="image_path"
            onChange={handleImageChange}
            className="upload-recipe__input"
          />
        </label>
        <button type="submit" className="upload-recipe__button">Upload</button>
      </form>
    </div>
  );
};

export default UploadRecipe;
