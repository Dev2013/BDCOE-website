import React from 'react';
import githubIcon from "../icons/github.svg";
import linkedinIcon from "../icons/linkedin.svg";
import instaIcon from "../icons/insta.svg";

const Card = ({ details }) => {

    return (
        <div className="team__card-container">
            <div className="card__body-image">
                <img src={details.imageUrl} loading="lazy" height="180" width="180" alt={details.name} />
                <div className="card__body-social">
                    <div className="body__social-links">
                        <div><a href={details.github} target="_blank" rel="noreferrer"><img src={githubIcon} height="25" width="25" alt="github" /></a></div>
                        <div><a href={details.github} target="_blank" rel="noreferrer"><img src={instaIcon} height="25" width="25" alt="intagram" /></a></div>
                        <div><a href={details.linkedin} target="_blank" rel="noreferrer"><img src={linkedinIcon} height="25" width="25" alt="linkedin" /></a></div>
                    </div>
                </div>
            </div>
            <div className="card__body-name">
                <div className="body__name-name">{details.name}</div>
                <div className="body__name-domain">{details.domain}</div>
                <div className="body__name-year">{details.year}</div>
            </div>
        </div>
    );
}

export default Card;