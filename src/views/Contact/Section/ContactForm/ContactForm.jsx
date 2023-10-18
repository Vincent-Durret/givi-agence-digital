import React from "react";

import "./ContactForm.scss";

const ContactForm = () => {
  return (
    <section className="contactform">
      <form action="#" className="contactform__form">
        <input type="text" placeholder="Nom" />
        <input type="text" placeholder="Prénom" />
        <input type="text" placeholder="E-mail" />
        <input type="text" placeholder="Tél" />
        <input type="text" placeholder="Détaillez-nous votre projet.." />
        <div className="form__btn">
          <button>Envoyer</button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
