import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";

import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Toaster
            position="top-right"
            toastOptions={{
                duration: 2500,
                style: {
                    background: "#1e293b",
                    color: "#fff",
                    borderRadius: "12px",
                    padding: "14px",
                },
            }}
        />

        <App />
    </StrictMode>
);