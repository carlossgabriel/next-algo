import Head from "next/head";

import styles from "../styles/Home.module.css";
import BackButton from "./backButton/backButton";

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <h1 className={styles.title}>Next JS Algorithms</h1>
        ) : (
          <BackButton />
        )}
      </header>
      <main className={styles.main}>{children}</main>
    </>
  );
}
