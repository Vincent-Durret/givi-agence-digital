import React from "react";

import "./OurServices.scss";

const OurServices = () => {
  return (
    <section className="ourservices">
      <div className="ourservices__grid">
        <div className="ourservices__grid-item">
          <div className="item__content">
            <h3>Stratégie digitale</h3>
            <p>
              Ensemble, établissons une stratégie digitale pertinente pour
              optimiser votre ROI. Chaque canal a ses spécificités, identifions
              la meilleure approche pour votre secteur.
            </p>
          </div>
        </div>
        <div className="ourservices__grid-item">
          <div className="item__content">
            <h3>Community management</h3>
            <p>
              Dans le paysage dynamique des médias sociaux, une gestion efficace
              de votre communauté est essentielle. Sur des plateformes comme
              Instagram, TikTok, et LinkedIn, notre équipe veillera à engager
              fidèlement vos audiences.
            </p>
          </div>
        </div>
        <div className="ourservices__grid-item">
          <div className="item__content">
            <h3>Création de contenu</h3>
            <p>
              Le contenu visuel est souvent le premier point de contact avec
              votre audience. Nous nous assurons de produire du contenu de haute
              qualité, photo ou vidéo, pour établir une impression durable et
              positive auprès de vos prospects.
            </p>
          </div>
        </div>
        <div className="ourservices__grid-item">
          <div className="item__content">
            <h3>Site web et application </h3>
            <p>
              Votre présence en ligne est votre principal outil de
              communication. Nous concevons et optimisons des sites web et
              applications pour répondre aux besoins spécifiques de votre
              audience tout en mettant en avant l'essence de votre marque.
            </p>
          </div>
        </div>
        <div className="ourservices__grid-item">
          <div className="item__content">
            <h3>Rédaction</h3>
            <p>
              Les mots ont un pouvoir. Qu'il s'agisse d'emails, d'articles de
              blog ou de fiches produits, ajustons votre ton et contenu pour
              séduire et informer votre audience.
            </p>
          </div>
        </div>
        <div className="ourservices__grid-item">
          <div className="item__content">
            <h3>Référencement naturel (SEO)</h3>
            <p>
              Augmentez la visibilité de votre site avec une stratégie SEO
              efficace. Définissons ensemble les mots-clés cibles, et
              laissez-nous optimiser votre contenu pour les moteurs de
              recherche.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
