import React from "react";

import PageStyle from "../../components/Page/PageStyle";
import Banner from "./Section/Banner/Banner";
import OurServices from "./Section/Services/OurServices";
import StrongPoint from "./Section/StrongPoint/StrongPoint";
import Trust from "./Section/Trust/Trust";
import OurVision from "./Section/OurVision/OurVision";
import OurNews from "./Section/OurNews/OurNews";
import FAQ from "./Section/FAQ/FAQ";
import YourIdeas from "./Section/YourIdeas/YourIdeas";

const Home = () => {
  return (
    <PageStyle>
      <Banner />
      <OurServices />
      <StrongPoint />
      <Trust />
      <OurVision />
      <OurNews />
      <FAQ />
      <YourIdeas />
    </PageStyle>
  );
};

export default Home;
