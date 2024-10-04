import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import HttpMethodProvider from "./context/HttpContextProvider.tsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <HttpMethodProvider>
        <App />
      </HttpMethodProvider>
    </BrowserRouter>
  </StrictMode>
);
