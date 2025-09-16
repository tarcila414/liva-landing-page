import React from "react";

import styles from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "green";
}

export const Button = ({ children, variant }: ButtonProps) => {
  const getVariantId = () => {
    switch (variant) {
      case "secondary":
        return styles.secondary;
      case "green":
        return styles.green;
      case "primary":
      default:
        return undefined;
    }
  };
  return (
    <button id={getVariantId()} className={styles.button}>
      {children}
    </button>
  );
};
