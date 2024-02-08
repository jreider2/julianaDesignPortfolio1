import React from 'react';
import Image from "next/image";
import styles from "./card.module.css";

export default function Card ({ p1, p2, p3, p4, p5, p6, bullet1, bullet2, imgage1, imgage2, imgage3, imgage4, imgage5, imgage6}) {
    return (
        <div className={styles.outterContainer}>
            <div className={`bodyText ${styles.cardBody}`}>
                {/* //box with text */}
                {p1}
            </div>
            <div className={styles.imageWrapper}>
                <Image
                    src={imgage1}
                    alt="Use Case Image"
                    sizes="100vw"
                    style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "contain"
                    }} />
            </div>
            <div className={styles.imageWrapper}>
                <Image
                    src={imgage2}
                    alt="Use Case Image"
                    sizes="100vw"
                    style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "contain"
                    }} />
            </div>
        </div>
    );
}