import React from "react";
import styles from "./Toggle.module.scss";

const Toggle = () => {
  const [size] = React.useState("");
  return (
    <>
      <label className={`${styles.switch} ${size == "big" ? styles.big : ""} `}>
        <input type="checkbox" className={styles.input} />
        <span className={`${styles.slider} ${styles.round}`}></span>
      </label>
    </>
  );
};

export default Toggle;
