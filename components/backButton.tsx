import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

export default function BackButton() {
  const router = useRouter();

  return (
    <Link href="/">
      <a className={styles.backButton}>🔙</a>
    </Link>
  );
}
