import React from 'react';

const MainScreen = () => {
    return (
        <div style={styles.mainScreen}>
            <div style={styles.content}>
                <div style={styles.iconContainer}>
                    <img src="/path/to/motorcycle-icon.svg" alt="Motorcycle Icon" style={styles.motorcycleIcon} />
                </div>
                <div style={styles.info}>
                    <h2 style={styles.infoText}>단속현황</h2>
                    <p style={styles.infoText}>2024 - 08 - 10</p>
                    <p style={styles.infoText}>17:50:10</p>
                </div>
                <div style={styles.status}>
                    <div style={styles.statusItem}>
                        <img src="/path/to/helmet-icon.svg" alt="Helmet Violation" style={styles.statusIcon} />
                        <p style={styles.statusItemText}>헬멧미착용</p>
                        <span style={styles.statusItemNumber}>04</span>
                    </div>
                    <div style={styles.statusItem}>
                        <img src="/path/to/warning-icon.svg" alt="Warning" style={styles.statusIcon} />
                        <p style={styles.statusItemText}>위험판단</p>
                        <span style={styles.statusItemNumber}>01</span>
                    </div>
                    <div style={styles.statusItem}>
                        <img src="/path/to/speeding-icon.svg" alt="Speeding" style={styles.statusIcon} />
                        <p style={styles.statusItemText}>속도위반</p>
                        <span style={styles.statusItemNumber}>02</span>
                    </div>
                </div>
                <button 
                    style={styles.startButton}
                    onMouseOver={(e) => e.target.style.backgroundColor = styles.startButtonHover.backgroundColor}
                    onMouseOut={(e) => e.target.style.backgroundColor = styles.startButton.backgroundColor}
                >
                    시작하기 →
                </button>
            </div>
        </div>
    );
}

const styles = {
    mainScreen: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#000',
        color: '#fff',
    },
    content: {
        textAlign: 'center',
        padding: '20px',
        backgroundColor: '#111',
        borderRadius: '15px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
    },
    iconContainer: {
        marginBottom: '20px',
    },
    motorcycleIcon: {
        width: '100px',
        height: 'auto',
    },
    info: {
        fontSize: '1.5em',
        marginBottom: '10px',
    },
    infoText: {
        margin: '5px 0',
        fontSize: '1.2em',
    },
    status: {
        display: 'flex',
        justifyContent: 'space-around',
        margin: '20px 0',
    },
    statusItem: {
        textAlign: 'center',
    },
    statusIcon: {
        width: '40px',
        height: 'auto',
        marginBottom: '10px',
    },
    statusItemText: {
        fontSize: '1.1em',
    },
    statusItemNumber: {
        display: 'block',
        fontSize: '2em',
        fontWeight: 'bold',
    },
    startButton: {
        marginTop: '20px',
        padding: '10px 20px',
        fontSize: '1.2em',
        color: '#fff',
        backgroundColor: '#444',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    },
    startButtonHover: {
        backgroundColor: '#555',
    }
};

export default MainScreen;
