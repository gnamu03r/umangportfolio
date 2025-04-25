import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import './introanimation.css';

const IntroAnimation = ({ onComplete }) => {
    const introRef = useRef(null);
    const textRef = useRef(null);
    const circleRef = useRef(null);

    useEffect(() => {
        const timeline = gsap.timeline({ onComplete });

        // Step 1: Expand circles
        timeline.to(circleRef.current, {
            scale: 5,
            opacity: 0,
            duration: 1.5,
            ease: "power3.out",
        });

        // Step 2: Animate text appearance
        timeline.fromTo(
            textRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
            "-=1"
        );

        // Step 3: Fade out entire intro screen
        timeline.to(introRef.current, {
            opacity: 0,
            scale: 1.1,
            duration: 1.5,
            ease: "power3.inOut",
            delay: 1,
        });
    }, [onComplete]);

    return (
        <div ref={introRef} style={styles.container} className="intro">
            <div ref={circleRef} style={styles.circle} className="intro_circle"></div>
            <h1 ref={textRef} style={styles.text}>YOU'RE ENTERING UMANG'S PORTFOLIO</h1>
        </div>
    );
};

const styles = {
    container: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f8f8f8",
        color: "#111",
        fontSize: "2rem",
        zIndex: 100,
        overflow: "hidden",
        
    },
    text: {
        fontSize: "2.5rem",
        fontWeight: "light",
        color: "#444",
        opacity: 0,
    },
    circle: {
        position: "absolute",
        width: "100px",
        height: "100px",
        background: "#888",
        borderRadius: "50%",
    },

};

export default IntroAnimation;
