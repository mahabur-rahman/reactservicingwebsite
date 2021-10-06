import React from "react";
import "./services.scss";
// img
import { Container, Row, Col } from "react-bootstrap";
import MainCard from "../Card/MainCard";
// data
import CardData from "../Data/CardData";
import { NavLink } from "react-router-dom";

const Services = () => {
  return (
    <>
      <section id="services">
        <Container>
          <Row>
            <Col xl={9} lg={10} md={7} className="mx-auto">
              <h2 className="servicesTitle">Most used services & More</h2>
            </Col>
          </Row>
          <Row>
            <Col xl={8} lg={10} md={10} className="mx-auto">
              <Row className="gy-4">
                {CardData.map((card) => {
                  const {
                    id,
                    imgSrc,
                    title,
                    profileImg,
                    name,
                    starRating,
                    dollar,
                  } = card;
                  return (
                    <MainCard
                      key={id}
                      imgSrc={imgSrc}
                      title={title}
                      profileImg={profileImg}
                      name={name}
                      starRating={starRating}
                      dollar={dollar}
                    />
                  );
                })}
              </Row>
            </Col>
          </Row>
        </Container>

        {/* view more button */}
        <div className="text-center mt-5">
          <NavLink to="/services" className="viewBtn">
            View More
          </NavLink>
        </div>
      </section>
    </>
  );
};

export default Services;
