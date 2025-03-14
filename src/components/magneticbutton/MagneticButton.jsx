import React, { useRef } from "react";
import gsap from "gsap";

const MagneticButton = ({ children }) => {
    const buttonRef = useRef(null);

    const handleMouseMove = (e) => {
        const button = buttonRef.current;
        if (!button) return; // Ensure button exists

        const { left, top, width, height } = button.getBoundingClientRect();
        const x = (e.clientX - (left + width / 2)) * 1.5;
        const y = (e.clientY - (top + height / 2)) * 1.5;

        console.log("Mouse X:", x, "Mouse Y:", y); // Debugging

        gsap.to(button, {
            x: x,
            y: y,
            scale: 1.1,
            duration: 0.3,
            ease: "power3.out",
        });
    };

    const handleMouseLeave = () => {
        console.log("Mouse left button"); // Debugging

        gsap.to(buttonRef.current, {
            x: 0,
            y: 0,
            scale: 1,
            duration: 0.5,
            ease: "elastic.out(1, 0.5)",
        });
    };

    return (
        <button
            ref={buttonRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={styles.button}
        >
            {children}
        </button>
        
    );
};

const styles = {
    button: {
        padding: "15px 30px",
        fontSize: "18px",
        fontWeight: "bold",
        color: "#fff",
        background: "#007BFF",
        border: "none",
        borderRadius: "10px",
        cursor: "pointer",
        position: "relative",
        transition: "0.3s ease-out",
        textTransform: "uppercase",
    },
};

export default MagneticButton;
