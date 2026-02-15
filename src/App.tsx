import React from "react";
import Footer from "@/components/layout/Footer";
import { Box } from "@mui/material";
import Main from "@/components/layout/Main";

export default function App() {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Main />
      <Footer />
    </Box>
  );
}
