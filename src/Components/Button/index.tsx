import styles from "./button.module.css";
import PlusIcon from "../Icons/PlusIcon";

function Button() {
  return (
    <button className={styles.btn}>
      Criar <PlusIcon />
    </button>
  );
}

export { Button };
