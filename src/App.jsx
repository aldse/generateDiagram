import React from "react";
import { Route, Routes } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoutes/protectedRoute";

import Home from "./pages/Home";
import LandingPage from "./pages/Landing";

import "./styles/index.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/home" element={<ProtectedRoute element={<Home />} />} /> */}
      </Routes>
    </>
  );
};

export default App;
