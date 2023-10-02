import React, { useEffect, useState } from "react";

import "./Trust.scss";
import LogoUTB from "../../../../assets/Logo/LogoClient/logo_univers_terrasses_bois.png";
import LogoAlchimie from "../../../../assets/Logo/LogoClient/logo_c_chouette_alchimie.png";
import LogoImpact from "../../../../assets/Logo/LogoClient/logo_impact_cbd.png";
import LogoParerga from "../../../../assets/Logo/LogoClient/logo_parerga.png";

const Trust = () => {
  const data = [LogoUTB, LogoAlchimie, LogoImpact, LogoParerga];
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselInfiniteScroll = () => {
    if (currentIndex === data.length - 1) {
      return setCurrentIndex(0);
    }
    return setCurrentIndex(currentIndex + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      carouselInfiniteScroll();
    }, 3000);
    return () => clearInterval(interval);
  });

  return (
    <section className="trust">
      <div className="trust__title-container">
        <h1>Ils nous font confiance</h1>
      </div>
      <div className="trust__carousel-container">
        {data.map((item, index) => {
          return (
            <div
              className="carousel__item"
              style={{ transform: `translate(-${currentIndex * 100}%)` }}
              key={index}
            >
              <img src={item} alt="" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Trust;
