import React from "react";
import Logo from "../../../../assets/Logo/logo_big_givi.png";

import "./Story.scss";

const Story = () => {
  return (
    <section className="story">
      <div className="story__img">
        <img src={Logo} alt="logo givi agence digitale" />
      </div>

      <div className="story__content">
        <h1>Notre histoire</h1>
        <p>
          Dans un monde en constante évolution, le digital est devenu bien plus
          qu'un simple outil : il est le terrain sur lequel les rêves prennent
          forme et les idées s'épanouissent.
        </p>
        <p>
          Chez GIVI notre vision est claire : vous guider et vous accompagner
          dans cet univers.
        </p>
        <p>
          Notre objectif principal est de vous aider à naviguer avec confiance
          dans ce monde numérique, de transformer vos ambitions en réalités
          tangibles et d'assurer que votre voix soit entendue dans cette vaste
          mer d'innovations.
        </p>
        <p>
          Ensemble, explorons les opportunités du monde 2.0 et construisons
          votre succès.
        </p>
      </div>
    </section>
  );
};

export default Story;
