import React from "react";

import Story from "./Section/Story/Story";
import Us from "./Section/Us/Us";
import Quote from "./Section/Quote/Quote";
import Agency from "./Section/Agency/Agency";
import TalkAbout from "./Section/TalkAbout/TalkAbout";

const Vision = () => {
  return (
    <div className="vision">
      <Story />
      <Us />
      <Quote />
      <Agency />
      <TalkAbout />
    </div>
  );
};

export default Vision;
