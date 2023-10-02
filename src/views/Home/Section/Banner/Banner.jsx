import React from "react";
import BannerImg from "../../../../assets/Home/Banner/banner_givi.jpg";

import "./Banner.scss";
import LinkButton from "../../../../components/UI/Button/LinkButton";

const Banner = () => {
  return (
    <section className="banner">
      <img className="banner__img" src={BannerImg} alt="" />
      <div className="banner__content">
        <div className="banner__title">
          <h1>
            L'harmonie du Yin et Yang appliquée à votre stratégie digitale
          </h1>
        </div>
        <div className="banner__action">
          <LinkButton
            to="contact"
            className="banner__button"
            text="Nous contacter"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
