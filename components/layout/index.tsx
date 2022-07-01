import Head from "next/head";

import BackButton from "../backButton";
import styles from "../layout/layout.module.css";

export default function Layout({
  children,
  home,
  title,
}: {
  children: React.ReactNode;
  home?: boolean;
  title: string;
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
          <>
            <BackButton />
            <h1 className={styles.title}>{title}</h1>
          </>
        )}
      </header>
      <main className={styles.main}>{children}</main>
    </>
  );
}
