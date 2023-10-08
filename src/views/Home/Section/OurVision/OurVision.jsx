import React from "react";

import LinkButton from "../../../../components/UI/Button/LinkButton";

import CoupleImg from "../../../../assets/Home/OurVision/couple_givi.jpg";

import "./OurVision.scss";

const OurVision = () => {
  return (
    <section className="ourvision">
      <div className="ourvision__container">
        <h2>Notre vision</h2>
        <p>
          Dans un monde en constante évolution, le digital est devenu bien plus
          qu'un simple outil : il est le terrain sur lequel les rêves prennent
          forme et les idées s'épanouissent.
        </p>
        <br />
        <p>
          Chez GIVI notre vision est claire : vous guider et vous accompagner
          dans cet univers.
        </p>
        <br />
        <p>
          Notre objectif principal est de vous aider à naviguer avec confiance
          dans ce monde numérique, de transformer vos ambitions en réalités
          tangibles et d'assurer que votre voix soit entendue dans cette vaste
          mer d'innovations.
        </p>
        <br />
        <p>
          Ensemble, explorons les opportunités du monde 2.0 et construisons
          votre succès.
        </p>
        <div className="ourvision__actions">
          <LinkButton
            to="/notre-vision"
            className="ourvision__button"
            text="en savoir plus"
          />
        </div>
      </div>
      <div className="ourvision__img">
        <img src={CoupleImg} alt="" />
      </div>
    </section>
  );
};

export default OurVision;
