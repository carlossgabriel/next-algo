import type { NextPage } from "next";
import styles from "../../styles/Home.module.css";
import { useState } from "react";

const Factorial: NextPage = () => {
  const [value, setValue] = useState<number>(2);
  const [result, setResult] = useState<number>(0);

  const factorial = (n: number): number => {
    return n > 1 ? n * factorial(n - 1) : 1;
  };

  const pageTitle = "Factorial";
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>{pageTitle}</h1>
      <div className={styles.card}>
        <p>Type the number to see it`s factorial</p>
        <div className={styles.content}>
          <input
            type={"number"}
            min={0}
            className={styles.input}
            onChange={(e) => {
              setResult(factorial(parseInt(e.target.value)));
            }}
          ></input>
          <p className={styles.result}>{result}</p>
        </div>
      </div>
    </div>
  );
};

export default Factorial;
