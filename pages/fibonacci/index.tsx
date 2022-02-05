import type { NextPage } from "next";
import styles from "../../styles/Home.module.css";
import { useState } from "react";
import BackButton from "../../components/backButton";

const Fibonacci: NextPage = () => {
  const [fibArray, setFibArray] = useState<number[]>([]);
  const [value, setValue] = useState<number>(0);

  const pageTitle = "Fibonacci";

  const fibonacci = (e: number) => {
    const sequence = [0, 1];
    for (let i = 2; i <= e; i++) {
      sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
    sequence.shift();
    return sequence;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value > 20 || value < 0) {
      return;
    }
    setValue(value);
    setFibArray(fibonacci(value));
  };

  return (
    <>
      <div className={styles.main}>
        <h1 className={styles.title}>
          <BackButton />
          {pageTitle}
        </h1>
        <div className={styles.card}>
          <p>
            Increase or decrease the numbers of factors you want to see of the
            Fibonacci sequence
          </p>
          <input
            type={"number"}
            min={1}
            max={20}
            maxLength={2}
            value={value}
            className={styles.input}
            onChange={(e) => {
              handleChange(e);
            }}
          ></input>
          <div className={styles.content}>
            {fibArray.map((i) => (
              <p key={i} className={styles.result}>
                {i}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Fibonacci;
