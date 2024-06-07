import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import HomePage from "./pages/HomePage/HomePage";
// import UploadPage from "./pages/UploadPage/UploadPage";
import Header from "./components/header/header.jsx";
import LoginPage from "./components/login/login.jsx";
import SignupPage from "./components/signup/signup.jsx";
import Footer from "./components/footer/footer.jsx";
import RecipesPage from "./pages/RecipesPage/RecipesPage";
import RecipeDetail from "./pages/RecipeDetailsPage/RecipeDetailsPage";
import UploadRecipePage from "./pages/UploadRecipe/UploadRecipe";
import CategoryPage from "./pages/CategoriesPage/CategoriesPage";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="/categories" element={<CategoryPage />} />
          <Route path="/upload" element={<UploadRecipePage />} />
          <Route path="/recipes" element={<RecipesPage />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
