import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import  Home  from "./pages/Home";
import  AddArq  from "./pages/AddArq";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/page2",
    element: <AddArq />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
        <RouterProvider router={router}/>
       
  </>
);
