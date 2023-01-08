import React, { useState } from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import Contact from "./Contact";
import About from "./About";
import Footer from "./Footer";
import Projects from "./Projects";
import Resume from "./Resume";

export default function PortfolioPages() {
  const [currentPage, setCurrentPage] = useState("Home");
  const renderPage = (page) => {
    switch (page) {
      case "Home":
        return <Home />;
      case "About":
        return <About />;
      case "Contact":
        return <Contact />;
      case "Projects":
        return <Projects />;
      default:
        return <Resume />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage(currentPage)}
      <Footer />
    </div>
  );
}
