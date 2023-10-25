import React, { useState } from "react";

// import "./FAQ.scss";

const FAQ = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      title: "C'est quoi une agence de communication digitale ?",
      text: "Une agence de communication digitale est spécialisée dans la promotion et la communication des marques, produits ou services sur les plateformes numériques. Elle s'occupe de la création de contenu, de la stratégie de médias sociaux, du marketing par e-mail, du SEO, du SEM, et d'autres services liés au monde digital pour assurer une présence en ligne solide et efficace pour ses clients.",
    },
    {
      id: 2,
      title: "Notre méthodologie de travail",
      text: "Chez GIVI, nous adoptons une approche collaborative. Tout commence par une phase d'écoute et de découverte où nous cherchons à comprendre vos besoins et objectifs. Ensuite, nous élaborons une stratégie sur mesure, suivie de sa mise en œuvre. À chaque étape, nous nous assurons d'obtenir vos retours et d'ajuster notre approche en conséquence. Nous croyons fermement en une communication transparente et régulière pour garantir le succès de chaque projet.",
    },
  ]);
  return (
    <section className="mt-[2rem] max-w-full">
      <div className="flex items-center flex-col w-full">
        <div className="mb-[1.5rem]">
          <h2 className="bg-black text-[3rem] font-bold text-white pl-[1rem] pr-[1rem] pt-[0.5rem] pb-[0.5rem] rounded-[calc(5rem/4)]">
            Vos questions les plus fréquentes
          </h2>
        </div>
        {items.map((item) => (
          <div className="flex items-center justify-center " key={item.id}>
            <div className="flex items-start justify-center flex-col mb-[1rem] mt-[1rem] w-[44%]">
              <h3 className="text-[1.8rem] font-bold">{item.title}</h3>
              <hr
                className="w-[60%]   mt-[1rem] mb-[1rem] text-black"
                color="#000"
              />
              <p className="text-[1.1rem] font-[500]">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
