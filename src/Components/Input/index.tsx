import styles from "./index.module.css";

interface InputProps extends React.InputHTMLAttributes<HTMLElement> {}

export function Input(props: InputProps) {
  return <input type="text" className={styles.input} {...props} />;
}
