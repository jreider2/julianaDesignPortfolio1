import React from 'react';
import Image from "next/image";
import styles from './box.module.css';

export default function Card ({ className, icon, txt, children}) {
    return (
        <div className={`${styles.outerContainer} ${className}` }>
            <div className={`${styles.container} ${styles.padding}`}>
                <div className={styles.iconContainer}>
                    <Image
                        src={icon}
                        alt="error loading image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
                </div>
                {/* TEXT */}
                <div className={`bodyText ${styles.text} `}>{txt}</div>
                {children}
            </div>
        </div>
    );
}