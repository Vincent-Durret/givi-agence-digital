import React from "react";

import "./KeepTouch.scss";

const KeepTouch = () => {
  return (
    <section className="keeptouch">
      <h3>Restons en contact</h3>
      <p>
        Inscrivez-vous à notre newsletter et suivez nos derniers projets et
        toutes nos actualités !
      </p>
      <div className="keeptouch__mail">
        <input type="mail" placeholder="email*" />
        <button>s'inscrire</button>
      </div>
      <p>contact@ave-communication.fr</p>
      <div className="keeptouch__logo">
        <span>Linkedin</span>
        <span>Instagram</span>
        <span>Facebook</span>
      </div>
    </section>
  );
};

export default KeepTouch;
