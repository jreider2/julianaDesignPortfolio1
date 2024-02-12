import React from 'react';
import Image from "next/image";
import styles from "./card.module.css";

export default function Card ({ p1, bullets, imgage1, imgage2, children}) {
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
            {bullets}
            {children}
        </div>
    );
}