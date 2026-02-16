import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App";
import { AppProviders } from "@/app/providers/AppProviders";
import { I18nProvider } from "@/shared/i18n";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppProviders>
      <I18nProvider defaultLang="en">
        <App />
      </I18nProvider>
    </AppProviders>
  </React.StrictMode>
);
