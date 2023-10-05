import React from "react";

import "./Home.scss";
import Banner from "./Section/Banner/Banner";
import OurServices from "./Section/Services/OurServices";
import StrongPoint from "./Section/StrongPoint/StrongPoint";
import Trust from "./Section/Trust/Trust";
import OurVision from "./Section/OurVision/OurVision";
import OurNews from "./Section/OurNews/OurNews";
import FAQ from "./Section/FAQ/FAQ";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <OurServices />
      <StrongPoint />
      <Trust />
      <OurVision />
      <OurNews />
      <FAQ />
    </div>
  );
};

export default Home;
