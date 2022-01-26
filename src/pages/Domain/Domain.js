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
        "Big data is a term that describes large, hard-to-manage volumes of data – both structured and unstructured – that inundate businesses on a day-to-day basis. ... Big data can be analyzed for insights that improve decisions and give confidence for making strategic business moves.",
    },
    {
      id: 2,
      domainName: "Competetive Programming",
      domainLogo: cplogo,
      content:
        "Competitive programming involves programmers competing against each other to solve programming questions in a limited amount of time. These events are usually held over the Internet or a local network. Contestants solve logical or mathematical programming questions in the coding language of their choice.",
    },
    {
      id: 3,
      domainName: "Web Development",
      domainLogo: webDlogo,
      content:
        "Web development refers in general to the tasks associated with developing websites for hosting via intranet or internet. The web development process includes web design, web content development, client-side/server-side scripting and network security configuration, among other tasks.",
    },
    {
      id: 4,
      domainName: "App Development",
      domainLogo: appDlogo,
      content:
        "Mobile application development is the process of creating software applications that run on a mobile device, and a typical mobile application utilizes a network connection to work with remote computing resources. Hence, the mobile development process involves creating installable software bundles and testing the application on target devices.",
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
        "A design is a plan or specification for the construction of an object or system or for the implementation of an activity or process, or the result of that plan or specification in the form of a prototype, product or process. The verb to design expresses the process of developing a design.",
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
