import Layout, { siteTitle } from '../components/layout';

import Head from 'next/head';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import TeaserCard from '../components/teasercard';

import arrowStyles from '../components/arrowDown.module.css';
import styles from '../styles/Home.module.css';


export default function Home({ allPostsData }) {
  return (
    <>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <div className={styles.heroContainer}>
        <div className={styles.heroSection}>

          <h1><span className={styles.EngineersLens}>Engineer's Lens</span></h1>
          <h1><span className={styles.designerVision}>Designer's Vision</span></h1>
          
          <div className={styles.subheadContainer}>
          <h2 >hi! i’m juliana, an engineer turned product designer.</h2>
          <h2>my methodical nature merges aesthetics with functionality.</h2>
          </div>
          
          <div className={arrowStyles.arrowDown}>↓</div>

        </div>
        </div>
        <TeaserCard title="Thought Filter" description="Designing an AI generator tool for content marketers." image="/images/macx2.png" link={"/thoughtFilter"}></TeaserCard>
        <TeaserCard title="Convoscope" description="Designing a context AI for MIT Media Lab" image="/images/macx2.png" link={"/convoScope"}></TeaserCard>
        <TeaserCard title="Case 3" description="Impress  –  loreum Iptsom something or another thing to say." image="/images/macx2.png" link={"/case3"}></TeaserCard>
      </Layout >
    </>

  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}