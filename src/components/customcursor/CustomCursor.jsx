import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const CustomCursor = () => {
    const handleClick = () => {
        gsap.to(cursorRef.current, { scale: 3, opacity: 0, duration: 0.3, onComplete: () => {
            gsap.to(cursorRef.current, { scale: 1, opacity: 1, duration: 0.3 });
        }});
    };
    
    useEffect(() => {
        window.addEventListener("click", handleClick);
        return () => window.removeEventListener("click", handleClick);
    }, []);


    useEffect(() => {
        const moveCursor = (e) => {
            gsap.to(cursorRef.current, { x: e.clientX, y: e.clientY, opacity: 1, duration: 0.2 });
            clearTimeout(cursorRef.current.timeout);
            cursorRef.current.timeout = setTimeout(() => {
                gsap.to(cursorRef.current, { opacity: 0, duration: 1 });
            }, 1000);
        };
    
        window.addEventListener("mousemove", moveCursor);
        return () => window.removeEventListener("mousemove", moveCursor);
    }, []);
    
    


    const cursorRef = useRef(null);

    useEffect(() => {
        const moveCursor = (e) => {
            gsap.to(cursorRef.current, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.2,
                ease: "power2.out",
            });
        };

        window.addEventListener("mousemove", moveCursor);
        return () => window.removeEventListener("mousemove", moveCursor);
    }, []);

    return <div ref={cursorRef} style={styles.cursor}></div>;
};


const styles = {
    cursor: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "25px",
        height: "25px",
        backgroundColor: "rgba(58, 59, 59, 0.8)",
        borderRadius: "50%",
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        mixBlendMode: "difference",
    },
};

export default CustomCursor;
