import React from "react";
import Banner from "./Section/Banner/Banner";

import "./Home.scss";
import OurServices from "./Section/Services/OurServices";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <OurServices />
    </div>
  );
};

export default Home;
