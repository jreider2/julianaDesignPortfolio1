import React from 'react';
import Image from 'next/image';

import styles from "./header.module.css";

export default function Header ({ image, heading, subheading }) {
    return (
        <>
            <img src={image} alt="Use Case Image" className={styles.headerImage} />
            <h1 className={styles.heading}>{heading}</h1>
            <h2>{subheading}</h2>
        </>
    );
}