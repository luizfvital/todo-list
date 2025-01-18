import React from "react";
import styles from "./index.module.css";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Checkbox(props: CheckboxProps) {
  return (
    <span className={styles.checkbox}>
      <input type="checkbox" {...props} />
    </span>
  );
}
