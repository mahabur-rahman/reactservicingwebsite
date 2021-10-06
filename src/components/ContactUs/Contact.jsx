import React from "react";
import "./contact.scss";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

// data
import getInTouch from "../Data/GetInTouchData";

const ContactUs = () => {
  return (
    <>
      <section id="contactUs">
        <Container>
          <Row className="text-center">
            <Col xl={8} className="mx-auto">
              <div className="getInTouch">
                <h2>Get in touch</h2>
                <p>
                  Are easy to find, so a visitor can quickly get in touch should
                  they need it.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col xl={8} className="mx-auto">
              <Row className="text-center">
                {getInTouch.map((data) => (
                  <Col
                    xl={6}
                    lg={6}
                    md={6}
                    sm={9}
                    key={data.id}
                    className="mx-auto"
                  >
                    <Card className="shadow">
                      <Card.Body>
                        <span className="phone">{data.icon}</span>
                        <Card.Title>{data.title}</Card.Title>
                        <Card.Text>{data.text}</Card.Text>
                        <h6 className="text-success">{data.phoneNumber}</h6>
                        <Button className="takeActionBtn" type="button">
                          {data.btnText}
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ContactUs;
