import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Helmet } from "react-helmet";
import { ThemeContext } from "./context/themeContext";
import { GlobalStyle } from "./styles/globalStyles";
import { darkTheme, lightTheme } from "./styles/theme";
import Sidebar from "./components/SidebarComponents/Sidebar";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";

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
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
                        rel="stylesheet"
                    />
                </Helmet>
                <Sidebar />
                <RouterProvider router={routes} />
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};

export default App;
