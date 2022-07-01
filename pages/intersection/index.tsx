import { ReactElement, useState } from "react";

import { NextPageWithLayout } from "../_app";
import Layout from "../../components/layout";
import styles from "../../styles/Home.module.css";

const pageTitle = "Intersection";
const Intersection: NextPageWithLayout = () => {
  const [wordA, setWordAValue] = useState("");
  const [wordB, setWordBValue] = useState("");
  const [intersection, setIntersection] = useState<string[]>([]);

  const handleChange = (wordA: string, wordB: string) => {
    setIntersection(
      calculateIntersection(wordA.toUpperCase(), wordB.toUpperCase())
    );
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
        <div className={styles.card}>
          <p>
            Type two words to find the intersection of the letters between them.
          </p>
          <p className={styles.observation}>
            Minumum letters: 3 Maximum letters: 15
          </p>
          <div className={styles.inputContainer}>
            <input
              id="wordA"
              type={"text"}
              minLength={3}
              maxLength={15}
              className={styles.textInput}
              onChange={(e) => {
                setWordAValue(e.target.value.toUpperCase());
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
                setWordBValue(e.target.value.toUpperCase());
                handleChange(wordA, wordB);
              }}
              value={wordB}
            ></input>
          </div>
          <div className={styles.intersection}>
            {intersection.length > 0 ? (
              intersection.map((letter, index) => {
                return <p key={index}>{letter}</p>;
              })
            ) : (
              <p>No intersection</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

Intersection.getLayout = function getLayout(page: ReactElement) {
  return <Layout title={pageTitle}>{page}</Layout>;
};

export default Intersection;
