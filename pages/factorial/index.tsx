import type { NextPage } from "next";
import styles from "../../styles/Home.module.css";
import React, { useState } from "react";
import BackButton from "../../components/backButton";

const Factorial: NextPage = () => {
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
      <h1 className={styles.title}>
        <BackButton />
        {pageTitle}
      </h1>
      <div className={styles.card}>
        <p>Type the number to see it`s factorial</p>
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

export default Factorial;
