import React from "react";

import "./Home.scss";
import Banner from "./Section/Banner/Banner";
import OurServices from "./Section/Services/OurServices";
import StrongPoint from "./Section/StrongPoint/StrongPoint";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <OurServices />
      <StrongPoint />
    </div>
  );
};

export default Home;
