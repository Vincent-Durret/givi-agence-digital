import React from "react";

import "./YourIdeas.scss";

const YourIdeas = () => {
  return (
    <section className="yourideas">
      <h2>Discutons de vos idées</h2>
      <div className="yourideas__form">
        <form>
          <input type="text" placeholder="Nom" />
          <input type="text" placeholder="Prénom" />
          <input type="mail" placeholder="E-mail" />
          <input type="text" placeholder="Tél" />
          <input type="text" placeholder="Détaillez-nous votre projet.." />
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </section>
  );
};

export default YourIdeas;
