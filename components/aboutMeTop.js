import React from 'react';
import styles from "./aboutMeTop.module.css";
import Image from 'next/image';
import profileImage from '/public/images/me.png';


export default function AboutMeTop({ children, home }) {
    return (
        <div className={styles.titleContainer}>
            <h1 className={styles.title}>about me</h1>

            <h2 className={styles.subtitle}>I’m Juliana, a software engineer turned product designer. </h2>

            <div className={styles.flexContainer1}>
                {/* Flexbox container 1 */}
                <div className={styles.imageContainer}>
                    <Image src={profileImage} alt="Image" layout="intrinsic"/>
                </div>
                <div>
                    <p>My experience as a senior software engineer at a top-tier consulting firm, working across sectors 
                        like B2C software, consumer electronics, natural gas, and fintech, taught me to 
                        <span className={styles.emphasis}> quickly grasp complex information </span> 
                        and turn challenges into manageable solutions. Some of my work has affected millions of people.</p>
                    <p>This 
                    <span className={styles.emphasis}> foundation in analytical thinking </span>
                        and problem-solving paved the way for my transition to product design, 
                        where I found a deeper satisfaction in blending those skills with my visual 
                        problem-solving abilities and my aesthetic sense on a daily basis.</p>
                </div>
            </div>

            <div className={styles.flexContainer2}>
                {/* Flexbox container 2 */}
                <p> <span className={styles.emphasis2}>My pursuit of learning </span> 
                    how to best design useable products, 
                    combined with my experience in development, 
                    has enabled me to view design through 
                    <span className={styles.emphasis2}> a unique lens.</span>
                    </p>
            </div>

            <div className={styles.flexContainer3}>
                {/* Flexbox container 3 */}
                <div className={styles.imageContainer}>
                    <Image src={profileImage} alt="Image" layout="intrinsic" />
                </div>
                <div>
                    <h3 className={styles.midTitle}>text part 1</h3>
                    <p>text part 1
                        <span className={styles.emphasis}> specail text</span> 
                        end of paragraph</p>
                </div>
            </div>

            <div className={styles.flexContainer4}>
                {/* Flexbox container 4 */}
            </div>

            <div className={styles.flexContainer5}>
                {/* Flexbox container 5 */}
            </div>
        </div>
    );
}
