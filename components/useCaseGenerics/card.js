import React from 'react';
import styles from "./card.module.css";

export default function Card ({ p1, p2, p3, p4, p5, p6, bullet1, bullet2, imgage1, imgage2, imgage3, imgage4, imgage5, imgage6}) {
    return (
        <div className={styles.outterContainer}>
            <div className={styles.body}>
                {/* //box with text */}
                {p1}
            </div>

        </div>
    );
}