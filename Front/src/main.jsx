import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import  Home  from "./pages/Home";
import  AddArq  from "./pages/AddArq";
import  TestJ  from "./pages/Teste";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Cadastro from "./pages/Cadastro/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/page1",
    element: <Cadastro />,
  },
  {
    path: "/page2",
    element: <AddArq />,
  },
  {
    path: "/test",
    element: <TestJ />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
        <RouterProvider router={router}/>
       
  </>
);
