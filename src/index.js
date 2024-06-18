import React from "react";
import ReactDOM from "react-dom/client";
import { createTheme, ThemeProvider } from "@mui/material/styles"; 
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

const themeOptions = {
    palette: {
        mode: "dark", 
        primary: {
            main: "#3f51b5",
        },
        secondary: {
            main: "#f50057",
        },
        background: {
            default: "#391f1f",
        },
    },
};

const theme = createTheme(themeOptions);

root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>
);