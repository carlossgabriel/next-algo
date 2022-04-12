import Link from "next/link";

import styles from "../styles/Home.module.css";

export default function BackButton() {
  return (
    <Link href="/">
      <a className={styles.backButton}>🔙</a>
    </Link>
  );
}
