import styles from "./input.module.css";

export function Input() {
  return (
    <input type="text" placeholder="Add new task" className={styles.input} />
  );
}
