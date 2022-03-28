import type { NextPage } from "next";
import styles from "../../styles/Home.module.css";
import { useState } from "react";
import BackButton from "../../components/backButton";

const Intersection: NextPage = () => {
  // const [fibArray, setFibArray] = useState<number[]>([]);
  const [value, setValue] = useState("");

  const pageTitle = "Intersection";

  const intersection = (e: number) => {
    const sequence = [0, 1];
    for (let i = 2; i <= e; i++) {
      sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
    sequence.shift();
    return sequence;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // const value = parseInt(e.target.value);
    // if (value > 20 || value < 0) {
    //   return;
    // }
    setValue(value);
    // setFibArray(intersection(value));
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
            Type two words to find the intersection of the letters between them.
          </p>
          <p className={styles.observation}>
            Minumum letters: 3
            Maximum letters: 15
          </p>
          <input
            type={"text"}
            placeholder={"Type the first word"}
            maxLength={15}
            value={value}
            className={styles.input}
            onChange={(e) => {
              handleChange(e);
            }}
          ></input>
          {/* <div className={styles.content}>
            {fibArray.map((i) => (
              <p key={i} className={styles.result}>
                {i}
              </p>
            ))}
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Intersection;
