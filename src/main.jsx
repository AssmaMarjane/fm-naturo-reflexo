import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes/root.jsx";
import "./style/main.scss";

/**
 * Main entry point of the React application.
 *
 * This file sets up and renders the React application. It uses `createRoot` from `react-dom/client`
 * to initialize the root of the React tree and `RouterProvider` from `react-router-dom` to handle
 * routing for the application.
 *
 * @file index.jsx
 * @module index
 */

const domRoot = document.getElementById("root");
const root = createRoot(domRoot);

/**
 * Renders the React application within the StrictMode.
 *
 * `StrictMode` helps to identify potential problems in the application by enabling additional checks and warnings.
 * The `RouterProvider` is used to provide routing capabilities based on the configuration defined in `router`.
 */
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
