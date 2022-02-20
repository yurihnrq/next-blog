import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Página inicial</title>
      </Head>
      <main>
        <p>Página inicial</p>
      </main>
    </div>
  );
};

export default Home;
