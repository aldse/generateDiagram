import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Route, RouterProvider, createBrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/authContext";
import Home from "./pages/Home";
import ProtectedRoute from "./components/ProtectedRoutes/protectedRoute";
import Logo from "./pages/Logo";
import Alert from "./pages/Alert";
import LandingPage from "./pages/LandingPage";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/theme";
import { GlobalStyle } from "./styles/globalStyles";
import Sidebar from "./components/SidebarComponents/Sidebar";
import { Analytics } from '@vercel/analytics/react';

export const ThemeContext = React.createContext(null);

const routes = [
  {
    path: "/home",
    element: <ProtectedRoute element={<Home />} />,
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

const App = () => {
    const [theme, setTheme] = useState("light");
    const themeStyle = theme === "light" ? lightTheme : darkTheme;

    return (
        <ThemeContext.Provider value={{ setTheme, theme }}>
            <ThemeProvider theme={themeStyle}>
                <GlobalStyle />
                <Helmet>
                    <title>PyDiagram</title>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
                        rel="stylesheet"
                    />
                </Helmet>
                <RouterProvider router={router}>
                    <Sidebar />
                    <React.StrictMode>
                        {routes.map((route) => (
                            <Route key={route.path} path={route.path} element={route.element} />
                        ))}
                    </React.StrictMode>
                </RouterProvider>
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};

ReactDOM.createRoot(document.getElementById("root")).render(
    <AuthProvider>
      <Analytics/>
      <App />
    </AuthProvider>
);
