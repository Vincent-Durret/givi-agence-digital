// Import Swiper React components
import { Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import LogoUTB from "../../../../assets/Logo/LogoClient/logo_univers_terrasses_bois.png";
import LogoAlchimie from "../../../../assets/Logo/LogoClient/logo_c_chouette_alchimie.png";
import LogoImpact from "../../../../assets/Logo/LogoClient/logo_impact_cbd.png";
import LogoParerga from "../../../../assets/Logo/LogoClient/logo_parerga.png";
import "./Trust.scss";

// Import Swiper styles
import "swiper/css";

const Trust = () => {
  return (
    <div className="trust">
      <Swiper modules={[Autoplay]} autoplay spaceBetween={0} slidesPerView={3}>
        <SwiperSlide>
          <img src={LogoUTB} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={LogoAlchimie} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={LogoImpact} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={LogoParerga} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Trust;
