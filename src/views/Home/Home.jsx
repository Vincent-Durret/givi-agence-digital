import React from "react";

import "./Home.scss";
import Banner from "./Section/Banner/Banner";
import OurServices from "./Section/Services/OurServices";
import StrongPoint from "./Section/StrongPoint/StrongPoint";
import Trust from "./Section/Trust/Trust";
import OurVision from "./Section/OurVision/OurVision";
import OurNews from "./Section/OurNews/OurNews";
import FAQ from "./Section/FAQ/FAQ";
import YourIdeas from "./Section/YourIdeas/YourIdeas";
import KeepTouch from "./Section/KeepTouch/KeepTouch";

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
      <YourIdeas />
      <KeepTouch />
    </div>
  );
};

export default Home;
