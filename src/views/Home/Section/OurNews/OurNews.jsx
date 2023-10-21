import React, { useState } from "react";

import "./Ournews.scss";

const OurNews = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      img: "/assets/Home/OurNews/news-one.jpg",
      title: "I'm SamiraHadid.",
      secondTitle: "Nice to meet you!",
      text: "Women's rights lawyer, founder of Girls for Arts International, cook, and proud mother of 2",
    },
    {
      id: 2,
      img: "/assets/Home/OurNews/news-two.jpg",
      title: "I'm SamiraHadid.",
      secondTitle: "Nice to meet you!",
      text: "Women's rights lawyer, founder of Girls for Arts International, cook, and proud mother of 2",
    },
    {
      id: 3,
      img: "/assets/Home/OurNews/news-three.jpg",
      title: "I'm SamiraHadid.",
      secondTitle: "Nice to meet you!",
      text: "Women's rights lawyer, founder of Girls for Arts International, cook, and proud mother of 2",
    },
  ]);
  return (
    <section className="ournews">
      <h2>Nos dernières actualités</h2>
      <div className="ournews__cards">
        {items.map((item) => (
          <div key={item.id} className="ournews__card">
            <div className="card__img">
              <img src={item.img} alt="" />
            </div>
            <div className="card__content">
              <h3>
                {item.title} <br /> {item.secondTitle}
              </h3>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
      <hr color="#000" />
    </section>
  );
};

export default OurNews;
