import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import profileImage from '/public/images/me.png';

import styles from "./aboutMeContent.module.css";

export default function AboutMeContent({ children, home }) {
    return (
        <div className={styles.fullContent}>
            <motion.div className={styles.titleContainer}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <h1 className={styles.title}>about me</h1>

                <h2 className={styles.subtitle}>I’m Juliana, a software engineer turned product designer. </h2>
            </motion.div>
            <motion.div className={styles.flexContainer1}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1 }}
            >
                {/* Flexbox container 1 */}
                <div className={styles.imageContainer}>
                    <Image src={profileImage} alt="Image" layout="intrinsic" />
                </div>
                <div className={styles.f1Text1}>
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
            </motion.div>
            <div className={styles.flexContainer2}>
                {/* Flexbox container 2 */}
                <p> <span className={styles.emphasis2}>My pursuit of learning </span>
                    how to best design useable products,
                    combined with my experience in development,
                    has enabled me to view design through
                    <span className={styles.emphasis2}> a unique lens.</span>
                </p>
            </div>
            <div className={styles.flexContainer1}>
                {/* Flexbox container 3 */}
                <div className={styles.f1Text1}>
                    <h3 className={styles.midTitle}>Arts and Science</h3>
                    <p>My BA in Philosophy and English, followed by a
                        <span className={styles.emphasis}> Masters in Computer Science</span>
                        , has equipped me with a unique blend of creative and analytical skills.
                        This mix is perfect for product design, where understanding technical and
                        business constraints is as important as presenting information in a user-friendly way.
                    </p>
                </div>
                <div className={styles.imageContainer}>
                    <Image src={profileImage} alt="Image" layout="intrinsic" />
                </div>
            </div>
            <div className={styles.flexContainer1}>
                {/* Flexbox container 4 */}
                <div className={styles.imageContainer}>
                    <Image src={profileImage} alt="Image" layout="intrinsic" />
                </div>
                <div className={styles.f1Text1}>
                    <h3 className={styles.midTitle}>Collaboration, Communication, and Mentorship</h3>
                    <p>My consultancy background underlines the importance of teamwork, proactive communication, and adaptability.
                        These skills, along with my experience as an ESL teacher in Japan and
                        <span className={styles.emphasis}> mentoring young engineers</span>
                        , have ingrained a strong sense of mentorship and collaboration in me, which I eagerly bring to the world of design.
                    </p>
                </div>
            </div>
            <motion.p className={styles.callout}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                Let’s create something
                <span className={styles.calloutEmphasis}> amazing together.</span>
            </motion.p>
            <div className={styles.flexContainer5}>
                {/* Flexbox container 5 */}
                <div className={styles.imageContainer}>
                    <Image src={profileImage} alt="Image" layout="intrinsic" />
                </div>
                <div className={styles.f1Text1}>
                    <h3 className={styles.midTitle}>Collaboration, Communication, and Mentorship</h3>
                    <p>My consultancy background underlines the importance of teamwork, proactive communication, and adaptability.
                        These skills, along with my experience as an ESL teacher in Japan and
                        <span className={styles.emphasis}> mentoring young engineers</span>
                        , have ingrained a strong sense of mentorship and collaboration in me, which I eagerly bring to the world of design.
                    </p>
                </div>
            </div>
        </div>
    );
}
