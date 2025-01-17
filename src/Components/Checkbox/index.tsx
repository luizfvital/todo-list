import styles from "./checkbox.module.css";

export function Checkbox() {
  return (
    <span className={styles.checkbox}>
      <input type="checkbox" />
    </span>
  );
}
