import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Footer.scss";
import {
  faFacebook,
  faLinkedin,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <section className="footer">
      <h2>Restons en contact</h2>
      <div className="footer__container">
        <p>
          Inscrivez-vous à notre newsletter et suivez nos derniers projets et
          toutes nos actualités !
        </p>
      </div>
      <div className="footer__mail">
        <input type="mail" placeholder="email*" />
        <button>s'inscrire</button>
      </div>
      <p>contact@ave-communication.fr</p>
      <div className="footer__logo">
        <FontAwesomeIcon className="icon" icon={faLinkedin} />
        <FontAwesomeIcon className="icon" icon={faSquareInstagram} />
        <FontAwesomeIcon className="icon" icon={faFacebook} />
      </div>
      <div className="footer__end-content">
        <p>© 2023 Agence GIVI communication with .</p>
        <p>Tous droits réservés </p>
        <p>Mentions Légales</p>
        <p>Politique de Confidentialité</p>
      </div>
    </section>
  );
};

export default Footer;
