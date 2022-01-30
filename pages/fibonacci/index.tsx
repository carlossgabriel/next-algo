import type { NextPage } from "next";
import styles from "../../styles/Home.module.css";
import { useEffect, useState } from "react";

const Fibonacci: NextPage = () => {
  const [fibArray, setFibArray] = useState<number[]>([]);

  const pageTitle = "Fibonacci";

  const fibonacci = (e: number) => {
    const sequence = [0, 1];
    for (let i = 2; i <= e; i++) {
      sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
    sequence.shift();
    return sequence;
  };

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>{pageTitle}</h1>
      <div className={styles.card}>
        <p>
          Increase or decrease the numbers of factors to see the Fibonacci
          sequence
        </p>
        <p>Min: 5 | Max: 20</p>
        <div className={styles.content}>
          <input
            type={"number"}
            min={5}
            max={20}
            onChange={(e) => {
              setFibArray(fibonacci(parseInt(e.target.value)));
            }}
          ></input>
          <p>{fibArray.map((i) => ` ${i} |`)}</p>
        </div>
      </div>
    </div>
  );
};

export default Fibonacci;
