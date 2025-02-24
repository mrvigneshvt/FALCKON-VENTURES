import { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./Routes/Home";
import About from "./Routes/About";
import ContactUs from "./Routes/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Home />} path="/home" />
        <Route element={<About />} path="/about" />
        <Route element={<ContactUs />} path="/contact-us" />
      </Routes>
    </>
  );
}

export default App;
