// Packages
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Context
import { HelmetProvider } from "react-helmet-async";

// Pages
import Home from "@/pages/home";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
