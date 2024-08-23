import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/authContext";
import { Route } from "react-router-dom";
import Login from "./pages/Login";
import AddArq from "./pages/AddArq";
import Cadastro from "./pages/Cadastro";
import ProtectedRoute from "./components/ProtectedRoutes/protectedRoute";
import Logo from "./pages/Logo";
import Alert from "./pages/Alert";
import LandingPage from "./pages/LandingPage";
import LandingPageComponents from "./components/LandingPageComponents";

const routes = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/cadastro",
    element: <Cadastro />,
  },
  {
    path: "/home",
    element: <ProtectedRoute element={<AddArq />} />,
  },
  {
    path: "/logo",
    element: <ProtectedRoute element={<Logo />} />,
  },
  {
    path: "/alert",
    element: <ProtectedRoute element={<Alert />} />,
  },
  {
    path: "/",
    element: <LandingPage />,
  },
];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router}>
 
    <React.StrictMode>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
  </React.StrictMode>
    </RouterProvider>
  </AuthProvider>
);
