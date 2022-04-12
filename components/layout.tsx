import Head from "next/head";

import styles from "../styles/Home.module.css";

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
