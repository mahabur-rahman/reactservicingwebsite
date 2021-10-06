import React from "react";
import "./servicesComp.scss";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import s1 from "../../img/sone.svg";
import { NavLink } from "react-router-dom";
// data
import { ServicesData } from "../Data/ServicesData";

const ServicesComp = () => {
  return (
    <>
      <section id="serviceComp">
        <Container>
          <Row className="gy-4">
            {ServicesData.map((data) => {
              return (
                <Col xl={4} lg={4} md={10} key={data.id} className="mx-auto">
                  <div
                    className={`firstBox ${
                      data.activeBtn && data.mt
                        ? `${data.activeBtn} ${data.mt}`
                        : null
                    }`}
                  >
                    <h4>{data.title}</h4>
                    <Image
                      src={data.imgSrc}
                      alt={data.title}
                      title={data.title}
                      fluid
                    />
                    <Button type="button" className="mt-5 mb-2">
                      {data.btnText}
                    </Button>
                    <div className="skipBtn">
                      <NavLink to={data.link}>{data.skipText}</NavLink>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ServicesComp;
