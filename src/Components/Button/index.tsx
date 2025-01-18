import styles from "./index.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "icon";
  children?: React.ReactNode;
}

export function Button({
  children,
  variant = "default",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={`${styles.btn} ${
        variant === "icon" ? styles["btn-icon"] : ""
      }`}
    >
      {children}
    </button>
  );
}
