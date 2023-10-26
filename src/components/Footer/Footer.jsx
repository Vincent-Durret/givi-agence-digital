import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import "./Footer.scss";
import {
  faSquareFacebook,
  faLinkedin,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <section className="flex items-center justify-center flex-column max-w-full mt-[12rem]">
      <h2 className="text-[2.5rem] font-bold">Restons en contact</h2>
      <div className="flex items-start justify-start w-[35%] mb-[1.5rem]">
        <p className="text-[1.1rem] text-black">
          Inscrivez-vous à notre newsletter et suivez nos derniers projets et
          toutes nos actualités !
        </p>
      </div>
      <div className="mb-[2rem]">
        <input type="mail" placeholder="email*" /> // see input with tailwind
        <button>s'inscrire</button>
      </div>
      <p>contact@ave-communication.fr</p>
      <div className="footer__logo">
        <FontAwesomeIcon className="icon" icon={faLinkedin} />
        <FontAwesomeIcon className="icon" icon={faSquareInstagram} />
        <FontAwesomeIcon className="icon" icon={faSquareFacebook} />
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
