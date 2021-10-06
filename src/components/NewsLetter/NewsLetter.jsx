import React, { useState, useEffect } from "react";
// scss
import "./newsletter.scss";

import {
  Container,
  Row,
  Col,
  FloatingLabel,
  Form,
  Button,
} from "react-bootstrap";

const NewsLetter = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
  });

  // after submittion 👍
  const [text, setText] = useState(false);
  // after submit 👍
  useEffect(() => {
    // setText(false);
    const timer = setTimeout(() => {
      setText(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [text]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserInfo((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(`Email : ${userInfo.email}`);
    // after submit 👍
    setText(true);
  };

  return (
    <>
      <section id="newsLetter">
        <Container>
          <Row className="text-center">
            <Col xl={6} lg={7} md={8} sm={10} className="mx-auto">
              <h2>Subscribe to our newsletter</h2>
              <Form className="d-flex" onSubmit={formSubmit}>
                <Col xl lg md sm xs className="mx-auto">
                  <FloatingLabel
                    controlId="floatingInputGrid"
                    label="Enter your email"
                  >
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      name="email"
                      value={userInfo.email}
                      onChange={handleChange}
                    />
                  </FloatingLabel>
                </Col>
                <Button variant="primary" type="submit">
                  Subscribe
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
        {/* after submitton */}
        {text ? (
          <div className="text-center mt-2">
            <span>I'll reply very soon 🙂</span>
          </div>
        ) : (
          ""
        )}
      </section>
    </>
  );
};

export default NewsLetter;
