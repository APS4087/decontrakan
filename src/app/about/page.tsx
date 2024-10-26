import React from 'react';

export default function About() {
    return (
        <div style={styles.pageContainer}>
            <div style={styles.contentWrapper}>
                {/* Main Content Section */}
                <section style={styles.mainSection}>
                    <h1 style={styles.title}>About Us</h1>

                    <div style={styles.contentContainer}>
                        <div style={styles.textContainer}>
                            <h2 style={styles.heading}>Kenyamanan adalah Prioritas</h2>
                            <p style={styles.paragraph}>
                                Kami adalah sebuah badan bisnis yang membantu keluarga atau pekerja 
                                mendapatkan tempat tinggal yang strategis, bersih, nyaman, dan tentunya terjangkau.
                            </p>

                            {/* Stats Section */}
                            <div style={styles.statsWrapper}>
                                <div style={styles.statBlock}>
                                    <p style={styles.stat}>500+</p>
                                    <p style={styles.statLabel}>Orang Tinggal lebih dari 3 tahun</p>
                                </div>
                                <div style={styles.statBlock}>
                                    <p style={styles.stat}>95%</p>
                                    <p style={styles.statLabel}>Responsive terhadap keluhan</p>
                                </div>
                                <div style={styles.statBlock}>
                                    <p style={styles.stat}>5</p>
                                    <p style={styles.statLabel}>Lokasi Berbeda</p>
                                </div>
                            </div>
                        </div>

                        {/* Image Section */}
                        <div style={styles.imageContainer}>
                            <img
                                style={styles.imagePlaceholder}
                                src="https://via.placeholder.com/300x300" 
                                alt="Placeholder"
                            />
                        </div>
                    </div>
                </section>
            </div>

            {/* Footer Section */}
            <footer style={styles.footer}>
                <div style={styles.footerLinks}>
                    <p>About</p>
                    <p>Contact</p>
                    <p>Location</p>
                    <p>Promotion</p>
                </div>
                <div style={styles.contactInfo}>
                    <p>Find Us</p>
                    <p>Kp. Bunder RT 009/002, Cikupa</p>
                    <p>Tangerang, Banten</p>
                    <p>+62-896-8587-1774</p>
                    <p>moinefou@hotmail.com</p>
                </div>
            </footer>

            {/* Footer Bottom Section */}
            <div style={styles.footerBottom}>
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
                <p>Cookies Settings</p>
                <p>© 2024 Relume. All rights reserved.</p>
            </div>
        </div>
    );
}

const styles = {
    pageContainer: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        overflowY: 'auto',
    },
    contentWrapper: {
        flex: 1,
        padding: '20px',
        backgroundColor: '#fff',
    },
    mainSection: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '40px 20px',
    },
    title: {
        fontSize: '32px',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '40px',
    },
    contentContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: '20px',
    },
    textContainer: {
        flex: 1,
    },
    heading: {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '20px',
    },
    paragraph: {
        fontSize: '16px',
        lineHeight: '1.6',
        marginBottom: '30px',
    },
    statsWrapper: {
        display: 'flex',
        gap: '30px',
    },
    statBlock: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    stat: {
        fontSize: '28px',
        fontWeight: 'bold',
    },
    statLabel: {
        fontSize: '14px',
    },
    imageContainer: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imagePlaceholder: {
        width: '300px',
        height: '300px',
        backgroundColor: '#ccc',
        borderRadius: '8px',
    },
    footer: {
        backgroundColor: '#DDE3D4', 
        padding: '40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    footerLinks: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
    },
    contactInfo: {
        textAlign: 'right',
    },
    footerBottom: {
        backgroundColor: '#E0E7DB',
        padding: '20px',
        textAlign: 'center',
        fontSize: '12px',
        color: 'gray',
    },
};
