import React from "react";
import "../style/Navbar.css";
import "../style/style.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

function NavigationBar({ currentPage, handlePageChange }) {
  //Navbar between Home, About Me, Contact, and Resume pages
  return (
    <>
      {["md"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="mb-3"
          id="navigationBar"
        >
          <Container fluid>
            <Navbar.Brand
              href="#home"
              onClick={() => handlePageChange("Home")}
              className={
                currentPage === "Home" ? "navbar-brand active" : "navbar-brand"
              }
            >
              Home
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title
                  className="sideNavTitle"
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                >
                  Lamar Martin's Portfolio
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-left flex-grow-1 pe-3">
                  <Nav.Link
                    id="navElement"
                    href="#About"
                    onClick={() => handlePageChange("About")}
                    className={
                      currentPage === "About" ? "nav-link active" : "nav-link"
                    }
                  >
                    About Me
                  </Nav.Link>
                  <Nav.Link
                    id="navElement"
                    href="#Contact"
                    onClick={() => handlePageChange("Contact")}
                    className={
                      currentPage === "Contact" ? "nav-link active" : "nav-link"
                    }
                  >
                    Contact
                  </Nav.Link>
                  <Nav.Link
                    id="navElement"
                    href="#Projects"
                    onClick={() => handlePageChange("Projects")}
                    className={
                      currentPage === "Projects"
                        ? "nav-link active"
                        : "nav-link"
                    }
                  >
                    Projects
                  </Nav.Link>
                  <Nav.Link
                    id="navElement"
                    href="#Resume"
                    onClick={() => handlePageChange("Resume")}
                    className={
                      currentPage === "Resume" ? "nav-link active" : "nav-link"
                    }
                  >
                    Resume
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavigationBar;
