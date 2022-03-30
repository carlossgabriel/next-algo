import type { NextPage } from "next";
import { useState } from "react";

import BackButton from "../../components/backButton";
import styles from "../../styles/Home.module.css";

const Intersection: NextPage = () => {
  // const [fibArray, setFibArray] = useState<number[]>([]);
  const [wordA, setWordAValue] = useState("");
  const [wordB, setWordBValue] = useState("");
  const [intersection, setIntersection] = useState<string[]>([]);

  const pageTitle = "Intersection";

  const handleClick = (wordA: string, wordB: string) => {
    setIntersection(calculateIntersection(wordA, wordB));
  };

  const calculateIntersection = (wordA: string, wordB: string) => {
    const a = wordA.split("");
    const b = wordB.split("");
    const wA = [...Array.from(new Set(a))];
    const wB = [...Array.from(new Set(b))];
    return wA.filter((letter) => wB.includes(letter));
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
            Minumum letters: 3 Maximum letters: 15
          </p>
          <div>
            <input
              id="wordA"
              type={"text"}
              minLength={3}
              maxLength={15}
              className={styles.textInput}
              onChange={(e) => {
                setWordAValue(e.target.value);
              }}
              value={wordA}
            ></input>
            <input
              id="wordB"
              type={"text"}
              minLength={3}
              maxLength={15}
              className={styles.textInput}
              onChange={(e) => {
                setWordBValue(e.target.value);
              }}
              value={wordB}
            ></input>
          </div>
          <button
            className={styles.button}
            onClick={() => {
              handleClick(wordA, wordB);
            }}
          >
            Submit
          </button>
          <div className={intersection.length ? styles.result : ""}>
            {intersection.length > 0 ? (
              <p>{intersection.map((letter) => letter)}</p>
            ) : (
              <p>No intersection</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Intersection;
