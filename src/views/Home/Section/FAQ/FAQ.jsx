import React from "react";

import "./FAQ.scss";

const FAQ = () => {
  return (
    <section className="faq">
      <div className="faq__container">
        <div className="faq__title">
          <h2>Vos questions les plus fréquentes</h2>
        </div>

        <div className="faq__content">
          <h3>C'est quoi une agence de communication digitale ?</h3>
          <hr color="#000" />
          <p>
            Une agence de communication digitale est spécialisée dans la
            promotion et la communication des marques, produits ou services sur
            les plateformes numériques. Elle s'occupe de la création de contenu,
            de la stratégie de médias sociaux, du marketing par e-mail, du SEO,
            du SEM, et d'autres services liés au monde digital pour assurer une
            présence en ligne solide et efficace pour ses clients.
          </p>
        </div>
        <div className="faq__content">
          <h3>Notre méthodologie de travail</h3>
          <hr color="#000" />
          <p>
            Chez GIVI, nous adoptons une approche collaborative. Tout commence
            par une phase d'écoute et de découverte où nous cherchons à
            comprendre vos besoins et objectifs. Ensuite, nous élaborons une
            stratégie sur mesure, suivie de sa mise en œuvre. À chaque étape,
            nous nous assurons d'obtenir vos retours et d'ajuster notre approche
            en conséquence. Nous croyons fermement en une communication
            transparente et régulière pour garantir le succès de chaque projet.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
