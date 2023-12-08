import React from 'react';
import RightArrow from './rightArrow';
import styles from "./teasercard.module.css";
import Link from 'next/link';

export default function TeaserCard({ title, description, image, link }) {
  return (
    
    <div className={styles.card}>
      <Link href={link} className={styles.link}>
      <div className={styles.top_container}>
        <div className={styles.text_content}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className={styles.arrowDiv}>
          <RightArrow />
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.image} />
      </div>
      </Link>
    </div>
    
  );
}