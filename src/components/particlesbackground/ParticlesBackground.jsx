import React, { useMemo } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import './particlesbackground.css';

const ParticlesBackground = () => {
    const particlesInit = async (engine) => {
        await loadSlim(engine);
    };

    // 🧠 Detect screen size once (on load)
    const isMobile = window.innerWidth <= 600;

    // 🎯 Use useMemo to optimize particle config based on device
    const particlesOptions = useMemo(() => ({
        fullScreen: { enable: true },
        particles: {
            number: { value: isMobile ? 30 : 80 },  // less particles on mobile
            color: { value: "#555" },
            shape: { type: "circle" },
            opacity: { value: isMobile ? 0.2 : 0.4 }, // less opacity on mobile
            size: { value: isMobile ? 2 : 3 },       // smaller particles
            move: {
                enable: true,
                speed: 0.5,
                direction: "none",
                outModes: "out",
            },
            links: {
                enable: true,
                distance: isMobile ? 100 : 150,       // shorter links
                color: "#888",
                opacity: isMobile ? 0.2 : 0.4,        // lighter links
                width: 1,
            },
        },
        detectRetina: true,
    }), [isMobile]);

    return (
        <Particles
            id="tsparticles"
            className="particles"
            init={particlesInit}
            options={particlesOptions}
            style={styles.particles}
        />
    );
};

const styles = {
    particles: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: "-999",
    }
};

export default ParticlesBackground;
