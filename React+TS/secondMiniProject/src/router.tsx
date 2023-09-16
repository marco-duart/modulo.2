import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login";
import SignUpPage from "./pages/signup";
import Home from "./pages/home";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<LoginPage />} path="/" />
      <Route element={<SignUpPage />} path="/signup" />
      <Route element={<Home />} path="/home" />
    </Routes>
  </BrowserRouter>
);

export default Router;
