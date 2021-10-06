import React, { useState, useEffect } from "react";
// scss
import "./blog.scss";

import { Container, Row, Col, Image } from "react-bootstrap";

// react icons
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
// data
import blogData from "../Data/BlogPost";

// aos
import AOS from "aos";
import "aos/dist/aos.css";

const BlogPost = () => {
  const [heart, setHeart] = useState(false);

  // aos
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section id="blogPost">
        <Container>
          <h2>Our latest Blogs</h2>
          <Row>
            {blogData.map((data) => (
              <Col
                xl={4}
                lg={4}
                md={10}
                key={data.id}
                className="mx-auto"
                data-aos="fade-down"
                data-aos-delay="50"
                data-aos-duration={data.duration}
              >
                <div className="mainBlog">
                  <div className="blogImg">
                    <Image src={data.imgSrc} alt={data.name} fluid />
                  </div>
                  <Link to={data.link} className="blogBox">
                    <h5>
                      In :<span className="textColor">{data.title}</span>
                    </h5>
                    <h6>{data.min}</h6>
                    <h2>{data.heading}</h2>
                    <p>{data.text}</p>

                    <div className="boxBottom mt-5">
                      <div className="heartIcon">
                        <span onClick={() => setHeart(!heart)}>
                          {heart ? <FaHeart /> : <FaRegHeart />}
                          <span className="mx-2">
                            {heart ? +data.countNumber + 1 : +data.countNumber}
                          </span>
                        </span>
                      </div>
                      <div className="nameImg d-flex mx-4">
                        <Image src={data.profileImg} alt="profile" fluid />
                        <div>
                          <h5 className="mb-0 name">{data.name}</h5>
                          <span className="date">{data.date}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default BlogPost;
