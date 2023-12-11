import React from 'react';
import styles from "./aboutMeTop.module.css";

export default function AboutMeTop ({ children, home }) {
    return (
        <div className={styles.titleContainer}>
            <h1 className={styles.title}>about me</h1>
        </div>
    );
}