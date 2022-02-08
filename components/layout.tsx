import Head from "next/head";
import Link from "next/link";

import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

export default function Layout({ children, home }: { children: React.ReactNode; home?: boolean }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <h1></h1>
            <p></p>
          </>
        ) : (
          <>
            <h2></h2>
          </>
        )}
      </header>
      <main className={styles.main}>{children}</main>
    </>
  );
}
