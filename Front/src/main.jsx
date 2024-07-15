import React from "react";
import ReactDOM from "react-dom/client";
import  Home  from "./pages/Home";
import  AddArq  from "./pages/AddArq";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Cadastro from "./pages/Cadastro/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cadastro",
    element: <Cadastro />,
  },
  {
    path: "/home",
    element: <AddArq />,
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
        <RouterProvider router={router}/>
       
  </>
);
