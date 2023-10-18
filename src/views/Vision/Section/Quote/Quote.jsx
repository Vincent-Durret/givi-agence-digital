import React from "react";

import "./Quote.scss";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Quote = () => {
  return (
    <section className="quote">
      <div className="quote__container">
        <span className="quote__icon-left">
          <FontAwesomeIcon icon={faQuoteLeft} />
        </span>
        <p>
          Chez GIVI notre vision est claire : vous guider et vous accompagner
          dans cet univers. Ensemble, explorons les opportunités du monde 2.0 et
          construisons votre succès.
        </p>
        <span className="quote__icon-right">
          <FontAwesomeIcon icon={faQuoteRight} />
        </span>
      </div>
    </section>
  );
};

export default Quote;
