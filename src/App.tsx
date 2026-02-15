import React from "react";
import Footer from "@/components/layout/Footer";
import { Box, Container, Typography } from "@mui/material";

export default function App() {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Box
        component="main"
        sx={{
          py: 6,
          flex: { xs: "0 0 auto", md: "1 1 auto" },
          height: { xs: 520, sm: 640, md: "auto" },
          overflow: { xs: "auto", md: "visible" }
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" fontWeight={800} gutterBottom>
            Frontend test scaffold
          </Typography>
          <Typography sx={{ opacity: 0.8 }}>
            React + TypeScript + Webpack + MUI + styled-components engine
          </Typography>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}
