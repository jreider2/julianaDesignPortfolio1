import React from 'react';
import styles from "./teasercard.module.css";

export default function TeaserCard({ title, description, image }) {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p>{description}</p>
      <img src="/images/arrow.svg" alt="arrow" />
      <img src={image} alt={title} className={styles.item1}/>
    </div>
  );
}