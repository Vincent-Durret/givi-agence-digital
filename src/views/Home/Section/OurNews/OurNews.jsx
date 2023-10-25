import React, { useState } from "react";

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
    <section className="mt-[4rem] flex items-center justify-center flex-col">
      <h2 className="text-[5rem] font-bold">Nos dernières actualités</h2>
      <div className="mt-[2rem] flex flex-row items-center justify-center">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-center flex-col w-[20rem] p-[2rem] m-0"
          >
            <div className="bg-black m-0 p-0 max-w-full ">
              <img className="w-[25rem]" src={item.img} alt="" />
            </div>
            <div className="flex items-start justify-center flex-col bg-black p-[1rem] text-white rounded-b-lg">
              <h3 className="text-[1.1rem]">
                {item.title} <br /> {item.secondTitle}
              </h3>
              <p className="text-[0.6rem]">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
      <hr className="w-[70%] mt-[3rem] mb-[3rem] text-black" />
    </section>
  );
};

export default OurNews;
