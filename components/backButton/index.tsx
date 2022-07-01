import Link from "next/link";

import styles from "./backButton.module.css";

export default function BackButton() {
  return (
    <Link href="/">
      <a className={styles.backButton}>🔙</a>
    </Link>
  );
}
