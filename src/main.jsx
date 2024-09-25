import React from "react";
import ReactDOM from "react-dom/client";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

import { AuthProvider } from "./context/authContext";

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

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <Analytics />
      <SpeedInsights />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
