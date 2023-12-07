import Layout, { siteTitle } from '../components/layout';

import Head from 'next/head';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import TeaserCard from '../components/teasercard';

import utilStyles from '../styles/utils.module.css';
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
        <TeaserCard title="Thought Filter" description="Impress  –  loreum Iptsom something or another thing to say." image="/images/macx2.png"></TeaserCard>
        <TeaserCard title="Thought Filter" description="Impress  –  loreum Iptsom something or another thing to say." image="/images/macx2.png"></TeaserCard>
        <TeaserCard title="Thought Filter" description="Impress  –  loreum Iptsom something or another thing to say." image="/images/macx2.png"></TeaserCard>
       <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          {/*<ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>{title}</Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
            </ul>*/}
        </section>
        
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