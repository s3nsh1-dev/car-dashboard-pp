import React from "react";
import { Routes, Route } from "react-router";
import Home from "./pages/home/Home";
import Dashboard from "./pages/dashboard/Dashboard";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='dashboard' element={<Dashboard />} />
    </Routes>
  );
};

export default App;
