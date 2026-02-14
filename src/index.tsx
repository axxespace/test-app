import React from "react";
import { createRoot } from "react-dom/client";

function App() {
    return (
        <div style={{ padding: 24, fontFamily: "system-ui" }}>
            <h1>Frontend test scaffold</h1>
            <p>Webpack + React + TS</p>
        </div>
    );
}

createRoot(document.getElementById("root")!).render(<App />);
