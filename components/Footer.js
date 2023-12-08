import Link from 'next/link';
import styles from './footer.module.css';
import LinkedInIcon from '/public/images/linkedin.png';
import Image from 'next/image';
import GitHubIcon from '/public/images/github.png';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.innerContainer}>
        <p>
          Juliana Reider <span className={styles.separator}>•</span> {new Date().getFullYear()}
        </p>
        <p>
          Get in touch below or directly at{' '}
          <a href="mailto:jreider@luc.edu" className={styles.email}>
            jreider@luc.edu
          </a>
        </p>
        <div className={styles.linksContainer}>
          <Link href="/">
            Home
          </Link>
          <a href="YOUR_RESUME_LINK" target="_blank" className={styles.resumeLink}>
            Resume
          </a>
          <a href="https://www.linkedin.com/in/juliana-reider-91425884/" target="_blank">
            <Image src={LinkedInIcon} alt="linkedIn" className={styles.LinkedInIcon} width={20} height={20} />
          </a>
          <a href="GITHUB_PROFILE_LINK" target="_blank">
            <Image src={GitHubIcon} alt="github" className={styles.GitHubIcon} width={20} height={20} />
          </a>
        </div>
      </div>
    </div>
  );
}