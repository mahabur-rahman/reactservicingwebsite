import React, { useState, useEffect } from "react";
import "./login.scss";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const LogIn = () => {
  const [info, setInfo] = useState({
    name: "",
    password: "",
  });

  // after btn click

  const [text, setText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setText(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [text]);

  const inputChange = (e) => {
    const { name, value } = e.target;

    setInfo((data) => {
      return {
        ...data,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Login successfully completed`);
    // after btn click
    setText(true);
  };
  return (
    <>
      <section id="login">
        <Container>
          <Row>
            <Col xl={7} lg={7} className="mx-auto">
              <div>
                <h4 className="title">Welcome to Login page</h4>
              </div>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col xl={5} lg={5} md={5} className="mx-auto mb-4 mb-lg-0">
                    <Form.Control
                      type="text"
                      placeholder="User name"
                      name="name"
                      value={info.name}
                      onChange={inputChange}
                    />
                  </Col>
                  <Col xl={5} lg={5} md={5} className="mx-auto  mb-4 mb-lg-0">
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={info.password}
                      onChange={inputChange}
                    />
                  </Col>
                  <Col
                    xl={2}
                    lg={2}
                    md={5}
                    className="mx-auto text-center text-lg-start mt-4 mt-lg-0"
                  >
                    <Button className="loginBtn" type="submit">
                      Login
                    </Button>
                  </Col>
                  {text ? (
                    <div className="text-center text-success mt-4">
                      <p>Login Successfully 🙂</p>
                    </div>
                  ) : (
                    ""
                  )}
                </Row>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default LogIn;
