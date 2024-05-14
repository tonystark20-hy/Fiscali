import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS here
import "./styles/tailwind.css";
import "./styles/index.css";
import "./styles/font.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);
