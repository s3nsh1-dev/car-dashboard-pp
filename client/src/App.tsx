import React from "react";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import NavigationBar from "./components/navbar/NavigationBar";
import { Box } from "@mui/material";
import Footer from "./pages/Footer";
import Feedback from "./pages/Feedback";
import Inventory from "./pages/Inventory";

const App: React.FC = () => {
  return (
    <Box
      id='container'
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh", // Ensure full height of the viewport
      }}
    >
      <NavigationBar />
      <Box
        id='content'
        sx={{
          flex: 1, // This makes sure the content takes available space
          mt: 12, // Keeps space below navbar
        }}
      >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='inventory' element={<Inventory />} />
          <Route path='feedback' element={<Feedback />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  );
};

export default App;
