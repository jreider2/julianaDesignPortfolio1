import React from 'react';
import styles from "./teasercard.module.css";

export default function TeaserCard({ title, description, image }) {
  return (
    <div className={styles.card}>
      <div className={styles.top_container}>
        <div className={styles.text_content}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <img src="/images/arrow.svg" alt="arrow" />
      </div>
      <img src={image} alt={title} className={styles.image} />
    </div>
  );
}