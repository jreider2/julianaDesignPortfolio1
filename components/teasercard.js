import React from 'react';
import RightArrow from './rightArrow';
import styles from "./teasercard.module.css";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export default function TeaserCard({ title, description, image, link }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    
    <div className={styles.card} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <Link href={link} className={styles.link}>
      <div className={styles.top_container}>
        <div className={styles.text_content}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <motion.div 
          initial={{ x: 0 }}
          animate={{ x: isHovered ? 6 : 0, color: isHovered ? "#FFD700" : "#000000"}}
          transition={{ duration: 0.25 }}
          className={styles.arrowDiv}
        >
          <RightArrow />
        </motion.div>
      </div>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.image} />
      </div>
      </Link>
    </div>
    
  );
}