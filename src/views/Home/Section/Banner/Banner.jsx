import React from "react";
// import "./Banner.scss";
import LinkButton from "../../../../components/UI/Button/LinkButton";

const Banner = () => {
  return (
    <section className="m-w-[100%] h-[100vh] bg-hero-pattern bg-no-repeat bg-cover bg-center">
      <div className="relative top-[15%] left-[10%] w-[77%]">
        <div className="bg-white  px-[0.5rem] py-[1rem] rounded-[calc(5rem/2.8)]">
          <h1 className="text-[3rem]">
            L'harmonie du Yin et Yang appliquée à votre stratégie digitale
          </h1>
        </div>
        <div className="m-w-[100%] mt-[2rem]">
          <LinkButton
            to="contact"
            className="w-[100%] text-[2rem] font-bold text-white bg-black px-[0.4rem] py-[0.9rem] rounded-[calc(5rem/6.2)]"
            text="Nous contacter"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
