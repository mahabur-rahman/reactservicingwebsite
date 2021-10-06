import React from "react";
// scss
import "./clients.scss";
import { Container, Row, Col, Card } from "react-bootstrap";
// data
import clientsData from "../Data/Clients";
// react count up
import CountUp from "react-countup";

const HappyClients = ({ headingOne, headingTwo, colorText, text }) => {
  return (
    <>
      <section id="clients">
        <Container>
          <Row className="text-center">
            <Col xl={8} lg={9} md={11} className="mx-auto">
              <div className="clientsPart">
                <h3>
                  {headingOne}
                  <strong className="textColor"> {colorText}</strong>
                  {headingTwo}
                </h3>

                <p>{text}</p>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            {clientsData.map((data) => (
              <Col xl={3} lg={3} md={6} key={data.id}>
                <Card className="text-center shadow">
                  <Card.Body>
                    <Card.Title>
                      <CountUp
                        end={data.number}
                        duration={data.duration ? data.duration : ""}
                        suffix={data.suffix ? data.suffix : ""}
                      />
                    </Card.Title>
                    <Card.Text>{data.text}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HappyClients;
