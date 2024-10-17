import "@mantine/charts/styles.css";
import "@mantine/core/styles.css";
import "mantine-datatable/styles.layer.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
