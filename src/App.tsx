import React from "react";
import { Routes, Route } from "react-router";
import Home from "./pages/home/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import NavigationBar from "./components/navbar/NavigationBar";
import { Box } from "@mui/material";

const App: React.FC = () => {
  return (
    <>
      <NavigationBar />
      <Box
        sx={{
          mt: 12, // Gap between navbar and page content
        }}
      >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='dashboard' element={<Dashboard />} />
        </Routes>
      </Box>
    </>
  );
};

export default App;
