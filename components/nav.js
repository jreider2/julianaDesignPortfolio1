import Link from 'next/link';
import styles from './nav.module.css'; // Import the CSS module

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <span className={styles.navLink}>juliana reider</span>
      </Link>

      <div className={styles.centerLinks}>
        <Link href="/">
          <span className={styles.navLink}>work</span>
        </Link>
        <Link href="/about">
          <span className={styles.navLink}>about</span>
        </Link>
      </div>

      <Link href="/contact">
        <span className={styles.navLink + " " + styles.primaryCTA}>contact</span>
      </Link>
    </nav>
  );
}