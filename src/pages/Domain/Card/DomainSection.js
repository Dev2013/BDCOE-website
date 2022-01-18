import React from "react";
import "./Card.css";

function DomainSection({ data }) {
  return (
    <div className="flip-card-container">
      <div className="flip-card">
        <div className="flip-card-front">
          <h1> {data.domainName} </h1>
          <div className="flex">
            <img src={data.domainLogo} alt={data.domainName} />
          </div>
        </div>
        <div className="flip-card-back">
          <p> {data.content}</p>
        </div>
      </div>
    </div>
  );
}

export default DomainSection;
