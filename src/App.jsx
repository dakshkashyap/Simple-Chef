import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import HomePage from "./pages/HomePage/HomePage";
// import UploadPage from "./pages/UploadPage/UploadPage";
import Header from "./components/header/header.jsx";
import LoginPage from "./components/login/login.jsx";
import SignupPage from "./components/signup/signup.jsx";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<HomePage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/videos/:videoId" element={<HomePage />} />
          <Route path="/upload" element={<UploadPage />} /> */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
