import React from "react";
import BigImage from "../../../../assets/Vision/Us/4.png";
import "./Us.scss";

const Us = () => {
  return (
    <section className="us">
      <img src={BigImage} alt="" />
      <div className="us__content">
        <div className="content__card">
          <p>
            Dans un monde en constante évolution, le digital est devenu bien
            plus qu'un simple outil
          </p>
        </div>
        <div className="content__card">
          <p>
            Dans un monde en constante évolution, le digital est devenu bien
            plus qu'un simple outil
          </p>
        </div>
      </div>
    </section>
  );
};

export default Us;
