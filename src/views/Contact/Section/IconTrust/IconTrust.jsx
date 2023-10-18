import React from "react";

import "./IconTrust.scss";
import { faClock, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const IconTrust = () => {
  return (
    <section className="icontrust">
      <div className="icontrust__container">
        <div className="container__card">
          <div className="card__icon">
            <FontAwesomeIcon className="iconTrust" icon={faClock} />
          </div>
          <p>9h00 - 19h30 </p>
          <p>Du lundi au vendredi</p>
        </div>
        <div className="container__card">
          <div className="card__icon">
            <FontAwesomeIcon className="iconTrust" icon={faEnvelope} />
          </div>
          <p>givi@gmail.com</p>
        </div>
        <div className="container__card">
          <div className="card__icon">
            <FontAwesomeIcon className="iconTrust" icon={faPhone} />
          </div>
          <p>+33 6 24 12 04 00</p>
        </div>
      </div>
    </section>
  );
};

export default IconTrust;
