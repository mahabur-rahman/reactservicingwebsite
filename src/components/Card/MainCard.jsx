import React, { useEffect } from "react";
import { Card, Image, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaStar } from "react-icons/fa";
// AOS Animation when page scroll
import AOS from "aos";
import "aos/dist/aos.css";

const MainCard = ({ imgSrc, title, profileImg, name, dollar, starRating }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Col
        xl={6}
        lg={6}
        md={10}
        className="mx-auto"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <NavLink to="/services">
          <Card className="shadow">
            <Card.Img variant="top" src={imgSrc} alt={title} height={"180"} />
            <Card.Body>
              <Card.Title className="title">{title}</Card.Title>
              <Image src={profileImg} alt={title} width={"50"} />
              <span className="name">{name}</span>
            </Card.Body>
            <Card.Footer>
              <div className="d-flex justify-content-between">
                <div className="text-muted">
                  <span>
                    <FaStar />
                  </span>
                  <span className="star"> {starRating}</span>
                </div>
                <div className="text-muted">
                  <p>
                    Starting at <strong>$ {dollar}</strong>
                  </p>
                </div>
              </div>
            </Card.Footer>
          </Card>
        </NavLink>
      </Col>
    </>
  );
};

export default MainCard;
