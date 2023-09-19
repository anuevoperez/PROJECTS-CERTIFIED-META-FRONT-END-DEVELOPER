import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importa Routes y Route

import Nav from "./frames/Nav";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeSwitch from "./context/ThemeSwitch";
import Home from "./frames/Home";
import Projects from "./frames/Projects";
import Contact from "./frames/Contact";

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Nav />
          <ThemeSwitch />
          <Routes> {/* Usa Routes en lugar de Switch */}
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
