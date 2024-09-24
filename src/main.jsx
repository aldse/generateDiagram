import React from "react";
import ReactDOM from "react-dom/client";
import { AuthProvider } from "./context/authContext";
import App from "./App";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/react";

ReactDOM.createRoot(document.getElementById("root")).render(
    <AuthProvider>
        <Analytics />
        <SpeedInsights />
        <App />
    </AuthProvider>
);
