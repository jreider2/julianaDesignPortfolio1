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
          {/* Juliana Reider 
          <span className={styles.separator}>•</span>  */}
          portfolio coded with love
          {/* <span className={styles.separator}></span> 
          ♥<span className={styles.separator}></span>  */}
          {/* <span className={styles.separator}>•</span>  */}
          {/* {new Date().getFullYear()}  */}
          <span className={styles.separator}></span> 
            {'  '}
          <a href="https://github.com/jreider2/nextjs-blog" target="_blank">
            <Image src={GitHubIcon} alt="github" className={styles.GitHubIcon} width={20} height={20} />
          </a>
        </p>
        {/* <div className={styles.linksContainer}>Made with &lt;3</div> */}
        <p>
            email {' '}
            <a href="mailto:jreider@luc.edu" className={styles.email}>
              jreider@luc.edu
            </a>
          </p>
          <div className={styles.linksContainer}>
          <Link href="/" className={styles.homeLink}>
            home
          </Link>
          <a href="YOUR_RESUME_LINK" target="_blank" className={styles.resumeLink}>
            resume
          </a>
          <a href="https://www.linkedin.com/in/juliana-reider/" target="_blank">
            <Image src={LinkedInIcon} alt="linkedIn" className={styles.LinkedInIcon} width={20} height={20} />
          </a>
          {/* <a href="https://github.com/jreider2/nextjs-blog" target="_blank">
            <Image src={GitHubIcon} alt="github" className={styles.GitHubIcon} width={20} height={20} />
          </a> */}
        </div>
      </div>
    </div>
  );
}