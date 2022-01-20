import React from 'react';
import Particles from "react-tsparticles";
import particlesConfig from "../config/particle-config";

const ParticleBackground = () => {
    return (
        <div className="particle__bg">
            <Particles options={particlesConfig} />
        </div>
    )
}

export default ParticleBackground;
