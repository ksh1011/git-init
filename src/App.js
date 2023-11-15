import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./AppLayout";
import NotFound from "./NotFound";

function App() {
  return (
    // <Router>
    <Routes>
      <Route path="/" element={<AppLayout />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    // </Router>
  );
}

export default App;
