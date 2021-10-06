import React, { useState } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
// img
import joinImg from "../../img/join.svg";
// custom scss
import "./join.scss";
import { NavLink } from "react-router-dom";
import { FaLocationArrow, FaRegLaugh } from "react-icons/fa";

const Join = () => {
  const [hover, setHover] = useState(false);

  const toggle = () => {
    setHover(!hover);
  };

  return (
    <>
      <section id="joinUs">
        <Container>
          <Row>
            <Col xl={10} className="mx-auto">
              <Row className="leftPart">
                <Col xl={5} lg={5} md={8} className="mx-auto">
                  <div className="joinImg">
                    <Image
                      src={joinImg}
                      alt="Join Us"
                      title={"Join Us Today"}
                      fluid
                    />
                  </div>
                </Col>
                <Col xl={6} lg={6} className="mx-auto">
                  <div className="joinContent mt-4 mt-lg-0">
                    <h3>Join Us Today</h3>
                    <p>
                      At Welcome, we don't want people who fit our culture. you
                      are a high performer who can thrive in our world, we would
                      love to have you join our team. You are a specialist, and
                      you have an outstanding service to offer ?
                    </p>
                    <NavLink
                      to="/contact"
                      variant="light"
                      className="joinBtn"
                      onMouseEnter={toggle}
                      onMouseLeave={toggle}
                      onClick={() => alert("You redirect to contact page 😀")}
                    >
                      Join Us
                      {hover ? (
                        <span className="mx-2">
                          <FaLocationArrow />
                        </span>
                      ) : (
                        <span className="mx-2">
                          <FaRegLaugh />
                        </span>
                      )}
                    </NavLink>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Join;
