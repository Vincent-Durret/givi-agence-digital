import React from "react";

import "./Footer.scss";

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
        <span>Linkedin</span>
        <span>Instagram</span>
        <span>Facebook</span>
      </div>
    </section>
  );
};

export default Footer;
