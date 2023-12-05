import React from 'react';
import Image from 'next/image';
import RightArrow from './RightArrow';
import styles from "./teasercard.module.css";

export default function TeaserCard({ title, description, image }) {
  return (
    <div className={styles.card}>
      <div className={styles.top_container}>
        <div className={styles.text_content}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <RightArrow />
      </div>
      <img src={image} alt={title} className={styles.image} />
    </div>
  );
}