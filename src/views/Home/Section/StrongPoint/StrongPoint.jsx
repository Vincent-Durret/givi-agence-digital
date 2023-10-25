import React, { useState } from "react";

const StrongPoint = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      number: "1",
      title: " Découverte",
      text: "Nous prenons le temps de vraiment comprendre vos besoins et aspirations",
    },
    {
      id: 2,
      number: "2",
      title: "Stratégie",
      text: "Nous prenons le temps de vraiment comprendre vos besoins et aspirations",
    },
    {
      id: 3,
      number: "3",
      title: "Conception",
      text: "Nous prenons le temps de vraiment comprendre vos besoins et aspirations",
    },
    {
      id: 4,
      number: "4",
      title: "Analyse et optimisation",
      text: "Nous prenons le temps de vraiment comprendre vos besoins et aspirations",
    },
  ]);

  return (
    <section className="flex justify-between items-center py-[2rem] bg-black text-white h-[30vh]">
      <div className="flex items-center flex-row max-w-full">
        {items.map((item) => (
          <div
            className="flex items-center justify-center w-full"
            key={item.id}
          >
            <p className="text-[7rem]">{item.number}.</p>
            <div className="flex flex-col w-full mr-[2rem] p-[1rem]">
              <h3 className="mb-[0.5rem]">{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StrongPoint;
