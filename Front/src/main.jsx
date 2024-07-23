import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/authContext";
import { Route } from "react-router-dom";
import Login from "./pages/Login";
import AddArq from "./pages/AddArq";
import Cadastro from "./pages/Cadastro";
import ProtectedRoute from "./components/ProtectedRoutes/protectedRoute";
import "./index.css";
import Carregamento from "./pages/Carregamento";

const routes = [
  {
    path: "/",
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
    path: "/carregando",
    element: <Carregamento />,
  },
];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router}>
      {/* {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))} */}
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </RouterProvider>
  </AuthProvider>
);
