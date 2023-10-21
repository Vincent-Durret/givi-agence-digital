import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./OurServices.scss";
import { faYinYang as faYinYang } from "@fortawesome/free-solid-svg-icons";

const OurServices = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      title: "Stratégie digitale",
      text: "Ensemble, établissons une stratégie digitale pertinente pour optimiser votre ROI. Chaque canal a ses spécificités, identifions la meilleure approche pour votre secteur.",
    },
    {
      id: 2,
      title: "Community management",
      text: "Dans le paysage dynamique des médias sociaux, une gestion efficace de votre communauté est essentielle. Sur des plateformes comme Instagram, TikTok, et LinkedIn, notre équipe veillera à engager fidèlement vos audiences.",
    },
    {
      id: 3,
      title: "Création de contenu",
      text: "Le contenu visuel est souvent le premier point de contact avec votre audience. Nous nous assurons de produire du contenu de haute qualité, photo ou vidéo, pour établir une impression durable et positive auprès de vos prospects.",
    },
    {
      id: 4,
      title: "Site web et application",
      text: "Votre présence en ligne est votre principal outil de communication. Nous concevons et optimisons des sites web et applications pour répondre aux besoins spécifiques de votre audience tout en mettant en avant l'essence de votre marque.",
    },
    {
      id: 5,
      title: "Rédaction",
      text: "Les mots ont un pouvoir. Qu'il s'agisse d'emails, d'articles de blog ou de fiches produits, ajustons votre ton et contenu pour séduire et informer votre audience.",
    },
    {
      id: 6,
      title: "Référencement naturel (SEO)",
      text: "Augmentez la visibilité de votre site avec une stratégie SEO efficace. Définissons ensemble les mots-clés cibles, et laissez-nous optimiser votre contenu pour les moteurs de recherche.",
    },
  ]);

  return (
    <section className="ourservices">
      <div className="ourservices__grid">
        {items.map((item) => (
          <div key={item.id} className="ourservices__grid-item">
            <div className="item__content">
              <h3>
                <FontAwesomeIcon icon={faYinYang} className="icon" />
                {item.title}
              </h3>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
