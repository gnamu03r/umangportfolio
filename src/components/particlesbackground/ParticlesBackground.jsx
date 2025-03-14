import React from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // Fix: Use slim version instead of full

const ParticlesBackground = () => {
    const particlesInit = async (engine) => {
        await loadSlim(engine); // Fix: Change `loadFull` to `loadSlim`
    };

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                fullScreen: { enable: true },
                // background: { color: "#fff" }, 
                particles: {
                    number: { value: 80 },
                    color: { value: "#555" },
                    shape: { type: "circle" },
                    opacity: { value: 0.7 },
                    size: { value: 3 },
                    move: {
                        enable: true,
                        speed: 0.5,
                        direction: "none",
                        outModes: "out",
                    },
                    links: {
                        enable: true,
                        distance:150,
                        color: "#888",
                        opacity: 0.4,
                        width: 1,
                    },
                },
                detectRetina: true,
            }}
            style={styles.particles} // ✅ Add styles to keep it in the background
        />
    );
};


const styles = {
    particles: {
        position: "fixed",  // ✅ Keeps it fixed in the background
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: "-999",  // ✅ Sends it behind everything
    }
};

export default ParticlesBackground;
