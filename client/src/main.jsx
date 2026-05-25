import React from "react";
import ReactDOM from "react-dom/client";
import "./lib/analytics"

import App from "./App";

import "./index.css";

import {
  HelmetProvider,
} from "react-helmet-async";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);