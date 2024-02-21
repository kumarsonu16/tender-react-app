import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Registeration from "./pages/registeration";


const theme = createTheme({
  spacing: 8,
});

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/registeration",
    element: <Registeration />,
  },
  {
    path: "/analytics",
    element: <Registeration />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <RouterProvider router={appRouter} />
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
