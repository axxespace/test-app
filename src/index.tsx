import React from "react";
import { createRoot } from "react-dom/client";
import { AppProviders } from "@/app/providers/AppProviders";
import { Box, Container, Typography } from "@mui/material";

function App() {
  return (
    <AppProviders>
      <Box sx={{ minHeight: "100vh", py: 6 }}>
        <Container maxWidth="md">
          <Typography variant="h3" fontWeight={800} gutterBottom>
            Frontend test scaffold
          </Typography>
          <Typography sx={{ opacity: 0.8 }}>
            React + TypeScript + Webpack + MUI + styled-components engine
          </Typography>
        </Container>
      </Box>
    </AppProviders>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
