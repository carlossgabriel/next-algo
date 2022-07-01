import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { ReactElement } from "react";

import Layout from "../components/layout";
import styles from "../styles/Home.module.css";
import { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>JS Algorithms</title>
          <meta
            name="description"
            content="Website to pratice JS and math skills"
          />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
        </Head>

        <main className={styles.main}>
          <div className={styles.card}>
            <div className={styles.title}>
              <Link href="/factorial">
                <a>Factorial</a>
              </Link>
            </div>
            <div className={styles.title}>
              <Link href="/fibonacci">
                <a>Fibonacci</a>
              </Link>
            </div>
            <div className={styles.title}>
              <Link href="/intersection">
                <a>Intersection</a>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout home={true}>{page}</Layout>;
};

export default Home;
