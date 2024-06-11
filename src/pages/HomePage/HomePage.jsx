import React, { useState } from "react";
import SearchBar from "../../components/searchbar/searchbar";
import RecipeList from "../../components/recipelist/recipelist";
import LoadingSpinner from "../../components/loadingspinner/loadingspinner";
import axios from "axios";
import "./HomePage.scss";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (ingredients) => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.post("http://localhost:8080/search", {
        ingredients,
      });
      setTimeout(() => {
        setRecipes(response.data);
        setLoading(false);
      }, 2000);
    } catch (error) {
      setTimeout(() => {
        setRecipes([]);
        setError("No recipes found");
        setLoading(false);
      }, 2000);
    }
  };

  return (
    <div className="home-page">
      <div className="home-page__hero">
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="home-page__content">
        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <p className="home-page__error">{error}</p>
        ) : (
          <RecipeList recipes={recipes} />
        )}
      </div>
    </div>
  );
};

export default HomePage;
