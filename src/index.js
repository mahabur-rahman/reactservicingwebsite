import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// react router dom
import { BrowserRouter } from "react-router-dom";
// simple react lightbox
import SimpleReactLightbox from "simple-react-lightbox";
ReactDOM.render(
  <BrowserRouter>
    <SimpleReactLightbox>
      <App />
    </SimpleReactLightbox>
  </BrowserRouter>,
  document.getElementById("root")
);
