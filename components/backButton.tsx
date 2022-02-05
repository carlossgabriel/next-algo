import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

export default function BackButton() {
  const router = useRouter();

  return (
    <span
      onClick={() => {
        router.back();
      }}
      className={styles.backButton}
    >
      🔙
    </span>
  );
}
