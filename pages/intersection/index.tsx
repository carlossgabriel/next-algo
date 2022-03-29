import { Input } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useState } from "react";

import BackButton from "../../components/backButton";
import styles from "../../styles/Home.module.css";

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
            <Input
              type={"text"}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder={"Type the first word"}
              maxLength={15}
            ></Input>
            <Input
              type={"text"}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder={"Type the first word"}
              maxLength={15}
            ></Input>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intersection;
