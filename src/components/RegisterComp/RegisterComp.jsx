import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import "./registercomp.scss";
import { NavLink } from "react-router-dom";
// social media
import SocialMedia from "../socialMedial/SocialMedial";
// btn
import ButtonComp from "../Button/ButtonCom";

const RegisterComp = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const inputChange = (e) => {
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
    alert(
      `Name : ${userInfo.name} Email : ${userInfo.email}, Phone : ${userInfo.phone}, Password : ${userInfo.password}`
    );
  };

  return (
    <>
      <section id="registerComp">
        <Container>
          <Row>
            <Col xl={6} lg={6} className="d-none d-xl-block">
              <div className="googleMap">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14606.067929547977!2d90.35101526856319!3d23.764597991681804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c09f9ba3d447%3A0x1babce9f1c6c95a3!2sMohammadpur%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1633339561775!5m2!1sen!2sbd"
                  width={"530"}
                  height={"660"}
                  allowfullscreen=""
                  loading="lazy"
                  title="Google Map"
                />
              </div>
            </Col>
            <Col xl={6} lg={8} md={10} className="mx-auto">
              <div className="registerRight">
                <h3>Register Now</h3>
                <p>
                  Don't have an account ?
                  <NavLink
                    to="/contact"
                    style={{ color: "#369D9A", marginLeft: "4px" }}
                  >
                    Create an account
                  </NavLink>
                  , it takes less than a minute
                </p>
                <div>
                  <Form onSubmit={formSubmit}>
                    <Form.Group className="mb-4" controlId="name">
                      <Form.Control
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={userInfo.name}
                        onChange={inputChange}
                      />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="emailId">
                      <Form.Control
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={userInfo.email}
                        onChange={inputChange}
                      />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="phoneNumber">
                      <Form.Control
                        type="number"
                        placeholder="Phone No"
                        name="phone"
                        value={userInfo.phone}
                        onChange={inputChange}
                      />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="password">
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={userInfo.password}
                        onChange={inputChange}
                      />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="I accept terms and conditions  & privacy policy"
                        style={{ color: "#ddd" }}
                      />
                    </Form.Group>
                    <ButtonComp />
                  </Form>
                  {/* social media */}
                  <Row>
                    <Col xl={12}>
                      <SocialMedia />
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default RegisterComp;
