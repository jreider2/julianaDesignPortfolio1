import Link from 'next/link';
import styles from './nav.module.css'; // Import the CSS module

export default function Nav() {
  return (
    <nav>
      <Link href="/">
        <span className={styles.navLink}>Work</span>
      </Link>
      <Link href="/about">
        <span className={styles.navLink}>About</span>
      </Link>
      <Link href="/contact">
        <span className={styles.navLink}>Contact</span>
      </Link>
    </nav>
  );
}