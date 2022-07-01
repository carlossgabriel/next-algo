import React, { ReactElement, useState } from "react";

import { NextPageWithLayout } from "../_app";
import Layout from "../../components/layout";
import styles from "../../styles/Home.module.css";

const Factorial: NextPageWithLayout = () => {
  const [value, setValue] = useState<number>(0);
  const [result, setResult] = useState<number>(0);

  const factorial = (n: number): number => {
    return n > 1 ? n * factorial(n - 1) : 1;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value > 20 || value < 0) {
      return;
    }
    setValue(value);
    setResult(factorial(value));
  };

  const pageTitle = "Factorial";
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>{pageTitle}</h1>
      <div className={styles.card}>
        <p>Type the number to see it`s factorial</p>
        <p className={styles.observation}>Max: 20</p>
        <div className={styles.content}>
          <input
            type={"number"}
            min={0}
            max={20}
            maxLength={2}
            className={styles.input}
            value={value}
            onChange={(e) => {
              handleChange(e);
            }}
          ></input>
          <p className={`${styles.result} ${styles.resultLong}`}>{result}</p>
        </div>
      </div>
    </div>
  );
};

Factorial.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Factorial;
