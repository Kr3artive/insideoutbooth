import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import SmallScreenProvider from "./contexts/SmallScreenContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SmallScreenProvider>
      <App />
    </SmallScreenProvider>
  </StrictMode>
);
