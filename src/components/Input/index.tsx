import React, { ReactNode } from "react";
import styles from "./Input.module.scss";

interface ParentComponentProps {
  children: ReactNode;
  placeholder?: string;
}

const Input: React.FC<ParentComponentProps> = ({ children, placeholder }) => {
  const [isError] = React.useState(false);
  return (
    <div className={styles.inputContainer}>
      <input
        className={`${styles.input} ${isError && styles.error}`}
        placeholder={placeholder}
      />
      <div className={styles.inputIcons}>{children}</div>
    </div>
  );
};

export default Input;
