import React from "react";
import "./socialMedia.scss";
import { FaFacebookF, FaTwitter, FaGooglePlusG } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <>
      <section id="socialMedia">
        <h6
          style={{ color: "#fff", letterSpacing: "2px", marginBottom: "2em" }}
        >
          Login with social media
        </h6>
        <div className="d-flex">
          <div className="facebook">
            <span className="mx-2">
              <FaFacebookF />
            </span>
            <a href="https://www.facebook.com/" target="blank">
              Facebook
            </a>
          </div>
          <div className="twitter mx-3">
            <span className="mx-2">
              <FaTwitter />
            </span>
            <a href="https://www.twitter.com/" target="blank">
              Twitter
            </a>
          </div>
          <div className="google mx-3">
            <span className="mx-2">
              <FaGooglePlusG />
            </span>
            <a href="https://www.google.com/" target="blank">
              Google
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default SocialMedia;
