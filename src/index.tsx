import React from "react";
import { createRoot } from "react-dom/client";

function App() {
    const unused = 123;

    return (
    <div style={{ padding: 24, fontFamily: "system-ui" }}>
      <h1>Frontend test scaffold</h1>
      <p>Webpack + React + TS</p>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
