import React, { useState, useEffect } from "react";
// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
// main scss
import "./main.scss";
// react router dom
import { Switch, Route, Redirect } from "react-router-dom";
// all components
import Header from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
// all pages
import Home from "./pages/Home";
import SpecialistsPortal from "./pages/SpecialistsPortal";
import Register from "./pages/Register";
import Login from "./pages/login";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
// react spinners 👍
import BounceLoader from "react-spinners/BounceLoader";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="spinners_move">
          <BounceLoader color={"#369D9A"} loading={loading} size={150} />
        </div>
      ) : (
        <>
          <Header />
          <Switch>
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/" component={Home} />
            <Route exact path="/services" component={Services} />
            <Route
              exact
              path="/specialists-portal"
              component={SpecialistsPortal}
            />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Redirect to="/" />
          </Switch>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
