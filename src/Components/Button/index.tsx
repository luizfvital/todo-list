import styles from "./button.module.css";

interface ButtonProps {
  variant?: "default" | "icon";
  children?: React.ReactNode;
}

function Button({ children, variant = "default" }: ButtonProps) {
  return (
    <button
      className={`${styles.btn} ${
        variant === "icon" ? styles["btn-icon"] : ""
      }`}
    >
      {children}
    </button>
  );
}

export { Button };
