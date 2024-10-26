'use client';
import styles from '../styles/style.module.scss';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { opacity, background } from './animate';
import Nav from './nav';

export default function Index() {
    const [isActive, setIsActive] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [time, setTime] = useState('');

    const toggleMusic = () => {
        setIsPlaying(!isPlaying);
    };

    // Fetch time
    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const options = {
                timeZone: 'Asia/Jakarta',
                hour: '2-digit',
                minute: '2-digit',
                hour12: true,
            };
            const timeString = now.toLocaleTimeString('id-ID', options);
            setTime(`${timeString}`);
        };

        // Update time every minute
        const intervalId = setInterval(updateTime, 60000);
        updateTime();

        // Clear interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className={styles.header}>
            <div className={styles.bar}>
                <div className={styles.leftSection}>
                    <Link href="/">D'econtrakan</Link>
                    {/* Display city, time, and timezone in one line */}
                    <div className={styles.locationInfo}>
                        <p>{time}, Tangerang</p>
                    </div>
                </div>

                {/* Tombol Music - Ganti dengan Gelombang Suara */}
                <div onClick={toggleMusic} className={styles.soundButton}>
                    <div className={`${styles.soundWaves} ${isPlaying ? styles.playing : styles.paused}`}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <p>{isPlaying ? 'SOUND: ON' : 'SOUND: OFF'}</p>
                </div>

                {/* Toggle Menu */}
                <div onClick={() => { setIsActive(!isActive) }} className={styles.el}>
                    <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
                    <div className={styles.label}>
                        <motion.p variants={opacity} animate={!isActive ? "open" : "closed"}>Menu</motion.p>
                        <motion.p variants={opacity} animate={isActive ? "open" : "closed"}>Close</motion.p>
                    </div>
                </div>
            </div>

            {/* Background & Menu */}
            <motion.div variants={background} initial="initial" animate={isActive ? "open" : "closed"} className={styles.background}></motion.div>
            <AnimatePresence mode="wait">
                {isActive && <Nav />}
            </AnimatePresence>

            {/* YouTube Embed (Hanya Audio) */}
            <div className={styles.musicPlayer}>
                <iframe
                    width="0"
                    height="0"
                    src={`https://www.youtube.com/embed/35AdtzquJYg?autoplay=${isPlaying ? 1 : 0}&loop=1&playlist=35AdtzquJYg`}
                    title="Relaxing Music"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
        </div>
    );
}
