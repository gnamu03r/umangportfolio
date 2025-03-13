import React from 'react'

const Alert = () => {
    const [visible, setVisible] = React.useState(true);

  return (
    visible && (
        <div style={styles.popup}>
            🔍 For the best experience, please set zoom to <b>67%</b>.
            <button style={styles.closeButton} onClick={() => setVisible(false)}>×</button>
        </div>
    )
  )
}

const styles = {
    popup: {
        position: "fixed",
        bottom: "20px",
        right: "20px",
        background: "#222",
        color: "white",
        padding: "10px 15px",
        borderRadius: "8px",
        fontSize: "14px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        display: "flex",
        alignItems: "center",
        gap: "8px",
    },
    closeButton: {
        background: "none",
        border: "none",
        color: "white",
        fontSize: "18px",
        cursor: "pointer",
    },
};

export default Alert