import React from "react";
// custom scss
import "./says.scss";
import { Container, Row, Col, Card } from "react-bootstrap";

// React icons
import {
  FaQuoteLeft,
  FaQuoteRight,
  FaStar,
  FaStarHalfAlt,
} from "react-icons/fa";
// data
import clientsData from "../Data/clientData";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
// modules
import "swiper/components/scrollbar/scrollbar.min.css";
// import Swiper core and required modules
import SwiperCore, { Scrollbar, Autoplay } from "swiper";

// install Swiper modules
SwiperCore.use([Scrollbar, Autoplay]);

const WhatSays = () => {
  const reviewStar = [
    { id: 1, icon: <FaStar /> },
    { id: 2, icon: <FaStar /> },
    { id: 3, icon: <FaStar /> },
    { id: 4, icon: <FaStar /> },
    { id: 5, icon: <FaStarHalfAlt /> },
  ];

  return (
    <>
      <section id="whatSays">
        <Container>
          <h3>Client Says </h3>
          <Row>
            <Col xl={7} lg={8} className="mx-auto">
              <Row>
                <Col>
                  <Swiper
                    autoplay={{
                      delay: 1500,
                      disableOnInteraction: false,
                    }}
                    scrollbar={{
                      hide: true,
                    }}
                  >
                    {clientsData.map((data) => (
                      <SwiperSlide key={data.id}>
                        <Card>
                          <Card.Img
                            variant="top"
                            src={data.imgSrc}
                            alt={data.name}
                            width={"50"}
                            height={"50"}
                          />
                          <Card.Body>
                            <span>
                              <FaQuoteLeft className="quote" />
                            </span>
                            <Card.Text>{data.text}</Card.Text>

                            <div>
                              {reviewStar.map((d) => (
                                <span className="mx-1 star" key={d.id}>
                                  {d.icon}
                                </span>
                              ))}
                            </div>
                            <Card.Title>{data.name}</Card.Title>
                          </Card.Body>
                        </Card>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default WhatSays;
