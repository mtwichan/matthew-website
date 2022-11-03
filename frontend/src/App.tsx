import React from "react";
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./routes/Home/Home";
import Projects from "./routes/Projects/Projects";
import BlogPreview from "./routes/Blog/BlogPreview";
import Blog from "./routes/Blog/Blog";
import Contact from "./routes/Contact/Contact";


function App() {
  return (
    <div className="content-container">
      <Header />
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<BlogPreview />} />
          <Route path="/blog/:blogSlug" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
}

export default App;
