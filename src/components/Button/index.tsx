import React, { ReactNode } from "react";
import styles from "./Button.module.scss";

interface ParentComponentProps {
  children?: ReactNode;
  onClick?: () => void;
  title?: string;
  width?: string;
  height?: string;
  gap?: string;
  padding?: string;
  ghost?: boolean;
  white?: boolean;
}

const Button: React.FC<ParentComponentProps> = ({
  children,
  onClick,
  title,
  ghost,
  white,
  width,
  height,
  gap,
  padding,
}) => {
  return (
    <button
      className={`${styles.button} ${ghost && styles.ghost} ${
        white && styles.white
      }`}
      style={{ width: width, height: height, gap: gap, padding: padding }}
      onClick={onClick}
    >
      {children}
      <h6>{title}</h6>
    </button>
  );
};

export default Button;
