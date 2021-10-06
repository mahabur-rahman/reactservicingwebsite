import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import Services from "../components/Services/Services";
import Join from "../components/JoinUs/Join";
import HappyClients from "../components/HappyClients/HappyClients";
import WhatSays from "../components/WhatSays/WhatSays";
import BlogPost from "../components/BlogPost/BlogPost";
import NewsLetter from "../components/NewsLetter/NewsLetter";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Services />
      <Join />
      <HappyClients
        headingOne={"Some"}
        headingTwo={"about our company"}
        colorText={"cool states "}
        text={
          "We believe this evolution also supports changing expectations in how and where content is created, used and shared across organizations."
        }
      />
      <WhatSays />
      <BlogPost />
      <NewsLetter />
    </>
  );
};

export default Home;
