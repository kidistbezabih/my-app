import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { AdminProvider } from "./contexts/admin-context.tsx";
import { GlobalContextProvider } from "./contexts/global-context.tsx";
import "./styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalContextProvider>
        <AdminProvider>
          <App />
        </AdminProvider>
      </GlobalContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
