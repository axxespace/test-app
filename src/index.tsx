import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { AppProviders } from "@/app/providers/AppProviders";

createRoot(document.getElementById("root")!).render(
  <AppProviders>
    <App />
  </AppProviders>
);
