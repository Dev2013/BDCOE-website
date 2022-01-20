import React from "react";
import Card from "./Card";
import teamData from "../teamData";

const Team = () => {
    return (
        <div className="team__team">
            <h2>Our Team</h2>
            <div className="team__cards">
                {teamData.map(member => {
                    return <Card key={member.id} details={member} />
                })}
            </div>
        </div>
    );
}

export default Team;