import React from "react";
import bdlogo from "./logo/bgData.svg";
import cplogo from "./logo/cp.svg";
import appDlogo from "./logo/appD.svg";
import webDlogo from "./logo/webD.svg";
import mllogo from "./logo/ml.svg";
import designlogo from "./logo/designing.svg";
import Card from "./Card/DomainSection";
import './Domain.css'

function Domain() {
  const CardData = [
    {
      id: 1,
      domainName: "Big Data",
      domainLogo: bdlogo,
      content:
        "Maching learning is an application of Artificial Intelligence (AI) that provides systems the ability to automatically learn and improve from experience without being explicitly programmed. Machine learning focuses on the development of computer programs that can access data and use it to learn for themselves.",
    },
    {
      id: 2,
      domainName: "Competetive Programming",
      domainLogo: cplogo,
      content:
        "Maching learning is an application of Artificial Intelligence (AI) that provides systems the ability to automatically learn and improve from experience without being explicitly programmed. Machine learning focuses on the development of computer programs that can access data and use it to learn for themselves.",
    },
    {
      id: 3,
      domainName: "Web Development",
      domainLogo: webDlogo,
      content:
        "Maching learning is an application of Artificial Intelligence (AI) that provides systems the ability to automatically learn and improve from experience without being explicitly programmed. Machine learning focuses on the development of computer programs that can access data and use it to learn for themselves.",
    },
    {
      id: 4,
      domainName: "App Development",
      domainLogo: appDlogo,
      content:
        "Maching learning is an application of Artificial Intelligence (AI) that provides systems the ability to automatically learn and improve from experience without being explicitly programmed. Machine learning focuses on the development of computer programs that can access data and use it to learn for themselves.",
    },
    {
      id: 5,
      domainName: "Machine Learning",
      domainLogo: mllogo,
      content:
        "Maching learning is an application of Artificial Intelligence (AI) that provides systems the ability to automatically learn and improve from experience without being explicitly programmed. Machine learning focuses on the development of computer programs that can access data and use it to learn for themselves.",
    },
    {
      id: 6,
      domainName: "Designing",
      domainLogo: designlogo,
      content:
        "Maching learning is an application of Artificial Intelligence (AI) that provides systems the ability to automatically learn and improve from experience without being explicitly programmed. Machine learning focuses on the development of computer programs that can access data and use it to learn for themselves.",
    },
  ];

  return (
    <div className="domainSection">
      <h2>Domain</h2>
      <div className="cardBox">
        {CardData.map((card) => {
          return <Card data={card} key={card.id} />;
        })}
      </div>
    </div>
  );
}

export default Domain;
