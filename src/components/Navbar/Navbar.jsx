import React, { useState } from "react";
// navbar scss
import "./navbar.scss";
import { Navbar, Container, Nav, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../img/logo.png";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [navBg, setNavBg] = useState(false);

  const changedBg = () => {
    if (window.scrollY >= 100) {
      setNavBg(true);
    } else {
      setNavBg(false);
    }
    // console.log(window.scrollY);
  };

  window.addEventListener("scroll", changedBg);

  return (
    <>
      <header id="header">
        <Navbar expand="md" className={navBg ? "scrollBg" : ""}>
          <Container>
            <NavLink to="/">
              <Navbar.Brand>
                <Image src={logo} width={80} height={"auto"} />
                <span className="logoName">Servicing</span>
              </Navbar.Brand>
            </NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
              <FaBars className="bars" />
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <NavLink
                  exact
                  to="/specialists-portal"
                  className="nav-link"
                  activeClassName="active"
                >
                  Specialists Portal
                </NavLink>
                <NavLink
                  exact
                  to="/register"
                  className="nav-link registerBtn"
                  activeClassName="active"
                >
                  Register
                </NavLink>
                <NavLink
                  exact
                  to="/login"
                  className="nav-link"
                  activeClassName="active"
                >
                  Login
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
