import React from "react";
import { Button } from "react-bootstrap";
import "./button.scss";

const ButtonComp = () => {
  return (
    <>
      <section id="registerBtn">
        <Button variant="primary" type="submit">
          Register
        </Button>
      </section>
    </>
  );
};

export default ButtonComp;
