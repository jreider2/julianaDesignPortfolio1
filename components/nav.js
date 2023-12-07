import Link from 'next/link';
import styles from './nav.module.css'; // Import the CSS module

export default function Nav() {
  return (
    <nav className={styles.nav}>

      <div className={styles.logoContainer}>
        <div className={styles.circle}></div>
        <Link href="/">
          <span className={styles.navLink}>juliana reider</span>
        </Link>
      </div>

      <div className={styles.centerLinks}>
        <div className={styles.linkContainer}>
          <div className={styles.circleSmall}></div>
          <Link href="/">
            <span className={styles.navLink}>work</span>
          </Link>
        </div>

        <div className={styles.linkContainer}>
          <div className={styles.circleSmall}></div>
          <Link href="/about">
            <span className={styles.navLink}>about</span>
          </Link>
        </div>

      </div>

      <Link href="/contact">
        <span className={styles.navLink + " " + styles.primaryCTA}>contact</span>
      </Link>
    </nav>
  );
}