import React, { useState } from "react";
// scss
import "./footer.scss";
import { NavLink } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaLinkedinIn,
  FaRegArrowAltCircleUp,
} from "react-icons/fa";

const Footer = () => {
  // for top arrow
  const [arrow, setArrow] = useState(false);

  const changedBg = () => {
    if (window.scrollY >= 530) {
      setArrow(true);
    } else {
      setArrow(false);
    }
    // console.log(window.scrollY);
  };

  window.addEventListener("scroll", changedBg);
  const [list, setList] = useState([
    { id: 1, title: "Write a guest post", link: "/contact" },
    { id: 2, title: "Meet the authors", link: "/contact" },
    { id: 3, title: "About liveChat", link: "/contact" },
  ]);
  const [socialIcon, setSocialIcon] = useState([
    { id: 1, icon: <FaFacebookF />, link: "/contact" },
    { id: 2, icon: <FaTwitter />, link: "/contact" },
    { id: 3, icon: <FaGooglePlusG />, link: "/contact" },
    { id: 4, icon: <FaLinkedinIn />, link: "/contact" },
  ]);

  const time = new Date().getFullYear();
  const name = ` Mahabur Rahman`;

  return (
    <>
      <footer id="footer">
        <Container>
          <Row>
            <Col xl={6} className="align-self-center">
              <div className="footerContent">
                <ul>
                  {list.map((item) => (
                    <li key={item.id}>
                      <NavLink to={item.link}>{item.title}</NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col xl={6}>
              <div className="socialIcon text-end">
                <ul>
                  {socialIcon.map((icon) => {
                    return (
                      <li className="icon" key={icon.id}>
                        <NavLink to={icon.link} className="fontSize">
                          {icon.icon}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Col>
          </Row>
          <Row className="text-center">
            <Col>
              <p className="mt-5 copyrightText">
                &copy; copyright and all rights reserved {time}. Developed by
                <NavLink
                  to="/contact"
                  className="name"
                  onClick={() => alert(`You redirect to contact page`)}
                >
                  {name}
                </NavLink>
              </p>
            </Col>
          </Row>
        </Container>
        {/* top arrow */}
        <div className={arrow ? "topArrow" : "arrow"}>
          <a href="#header">
            <FaRegArrowAltCircleUp />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
