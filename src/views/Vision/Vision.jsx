import React from "react";

import Story from "./Section/Story/Story";
import Us from "./Section/Us/Us";
import Quote from "./Section/Quote/Quote";
import Agency from "./Section/Agency/Agency";
import TalkAbout from "./Section/TalkAbout/TalkAbout";
import PageStyle from "../../components/Page/PageStyle";

const Vision = () => {
  return (
    <PageStyle>
      <Story />
      <Us />
      <Quote />
      <Agency />
      <TalkAbout />
    </PageStyle>
  );
};

export default Vision;
