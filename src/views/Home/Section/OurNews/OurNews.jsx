import React from "react";

import "./Ournews.scss";

import ImgNewsOne from "../../../../assets/Home/OurNews/news-one.jpg";
import ImgNewsTwo from "../../../../assets/Home/OurNews/news-two.jpg";
import ImgNewsThree from "../../../../assets/Home/OurNews/news-three.jpg";

const OurNews = () => {
  return (
    <section className="ournews">
      <h2>Nos dernières actualités</h2>
      <div className="ournews__cards">
        <div className="ournews__card">
          <div className="card__img">
            <img src={ImgNewsOne} alt="" />
          </div>
          <div className="card__content">
            <h3>
              I'm SamiraHadid. <br /> Nice to meet you!
            </h3>
            <p>
              Women's rights lawyer, founder of Girls for Arts International,
              cook, and proud mother of 2
            </p>
          </div>
        </div>
        <div className="ournews__card">
          <div className="card__img">
            <img src={ImgNewsTwo} alt="" />
          </div>
          <div className="card__content">
            <h3>
              I'm SamiraHadid. <br /> Nice to meet you!
            </h3>
            <p>
              Women's rights lawyer, founder of Girls for Arts International,
              cook, and proud mother of 2
            </p>
          </div>
        </div>
        <div className="ournews__card">
          <div className="card__img">
            <img src={ImgNewsThree} alt="" />
          </div>
          <div className="card__content">
            <h3>
              I'm SamiraHadid. <br /> Nice to meet you!
            </h3>
            <p>
              Women's rights lawyer, founder of Girls for Arts International,
              cook, and proud mother of 2
            </p>
          </div>
        </div>
      </div>
      <hr color="#000" />
    </section>
  );
};

export default OurNews;
