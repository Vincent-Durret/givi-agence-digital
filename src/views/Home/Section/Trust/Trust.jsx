// Import Swiper React components
import React, { useState } from "react";
import { Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "./Trust.scss";

// Import Swiper styles
import "swiper/css";

const Trust = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      img: "/assets/Logo/LogoClient/logo_univers_terrasses_bois.png",
    },
    {
      id: 2,
      img: "/assets/Logo/LogoClient/logo_c_chouette_alchimie.png",
    },
    {
      id: 3,
      img: "/assets/Logo/LogoClient/logo_impact_cbd.png",
    },
    {
      id: 4,
      img: "/assets/Logo/LogoClient/logo_parerga.png",
    },
  ]);
  return (
    <div className="trust">
      <Swiper modules={[Autoplay]} autoplay spaceBetween={0} slidesPerView={3}>
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.img} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default Trust;
