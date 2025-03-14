import React, { useState, useEffect } from "react";
import { Howl } from "howler";
import musicFile from "../../assets/music.mp3"; // Replace with your music file
import clickSoundFile from "../../assets/click.wav"; // Replace with your click sound file

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [music] = useState(new Howl({ src: [musicFile], loop: true, volume: 0.5 }));
    const clickSound = new Howl({ src: [clickSoundFile], volume: 0.7 });

    useEffect(() => {
        if (isPlaying) {
            music.play();
        } else {
            music.pause();
        }
    }, [isPlaying, music]);

    return (
        <div style={styles.container}>
            <button 
                onClick={() => setIsPlaying(!isPlaying)} 
                style={styles.musicButton}
            >
                {isPlaying ? "⏹ Stop Music" : "🎧 Play Lofi Music"}
            </button>
            {/* <button onClick={() => clickSound.play()} style={styles.soundButton}>
                Click Me (🔊 Sound)
            </button> */}
        </div>
    );
};

const styles = {
    container: {
        position: "fixed",
        bottom: "30px",
        left: "40px",
        display: "flex",
        gap: "10px",
    },
    musicButton: {
        padding: "10px",
        background: "#555",
        color: "#fff",
        border: "none",
        borderRadius: "15px",
        cursor: "pointer",
        font: "bold 0.5rem Poppins, sans-serif",
    },
    soundButton: {
        padding: "10px",
        background: "#555",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
    },
};

export default MusicPlayer;
