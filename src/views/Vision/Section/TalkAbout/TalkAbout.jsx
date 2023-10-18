import React from "react";

import Button from "../../../../components/UI/Button/LinkButton";

import "./TalkAbout.scss";

const TalkAbout = () => {
  return (
    <section className="talkabout">
      <div className="talkabout__content">
        <h2>Discutons de votre projet !</h2>
        <div className="content__action">
          <Button className="action" to="/contact" text="Nous contacter" />
        </div>
      </div>
    </section>
  );
};

export default TalkAbout;
