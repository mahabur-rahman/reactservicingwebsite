import React, { useState } from "react";
import "./hero.scss";
import { Container, Row, Col, Image } from "react-bootstrap";
// img
import logo from "../../img/logo.png";
import heroImg from "../../img/hero.svg";
import { NavLink } from "react-router-dom";
import { FaAngleRight, FaAngleDoubleRight } from "react-icons/fa";
// simple react lightbox 👍
import { SRLWrapper } from "simple-react-lightbox";

const HeroSection = () => {
  const [hover, setHover] = useState(true);

  const toggle = () => {
    setHover(!hover);
  };

  return (
    <>
      <section id="heroSection">
        <Container>
          <Row>
            <Col xl={10} lg={10} className="mx-auto">
              <Row>
                <Col
                  xl={6}
                  lg={6}
                  md={12}
                  sm={12}
                  className="align-self-center mx-auto"
                >
                  <div className="content">
                    <div className="d-flex align-items-center">
                      <Image
                        src={logo}
                        width={80}
                        height={"auto"}
                        className="d-none d-lg-block"
                      />
                      <h2>Servicing</h2>
                    </div>
                    <div className="text">
                      <h3>Find the right specialists</h3>
                      <h3>For the job</h3>
                      <p>
                        Get the freedom and flexibility to tackle challenges and
                        work the way you want to. Be encouraged to think outside
                        the box and accomplish technical breakthroughs.
                      </p>
                      {/* join btn */}
                      <div className="joinBtn">
                        <NavLink
                          to="/register"
                          className="jonNowBtn"
                          onMouseEnter={toggle}
                          onMouseLeave={toggle}
                        >
                          Join Now
                          <span className="mx-1">
                            {hover ? <FaAngleRight /> : <FaAngleDoubleRight />}
                          </span>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </Col>

                <Col xl={6} lg={6} md={6} className="align-self-center">
                  <SRLWrapper>
                    <div className="heroImg">
                      <Image
                        src={heroImg}
                        fluid
                        className="d-none d-lg-block"
                      />
                    </div>
                  </SRLWrapper>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HeroSection;
