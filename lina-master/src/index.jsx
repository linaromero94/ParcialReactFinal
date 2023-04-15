import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as ReactDOMClient from "react-dom/client";
import App from "./App";

// Create a root.
const root = ReactDOMClient.createRoot(document.getElementById("root"));

// Initial render: Render an element to the root.
root.render(<App tab='home' />);
