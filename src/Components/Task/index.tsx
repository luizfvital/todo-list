import { Button } from "../Button";
import { Checkbox } from "../Checkbox";
import TrashIcon from "../Icons/TrashIcon";
import styles from "./index.module.css";

interface TaskProps {
  content: string;
  complete?: boolean;
  onSetIsComplete: () => void;
  onDelete: () => void;
}

export function Task({
  content,
  complete,
  onSetIsComplete,
  onDelete,
}: TaskProps) {
  const handleOnDelete = () => {
    onDelete();
  };

  const handleOnSetIsComplete = () => {
    onSetIsComplete();
  };

  return (
    <div
      className={`${styles.task} ${complete ? styles["task--complete"] : ""}`}
    >
      <Checkbox />
      {content}
      <Button variant="icon">
        <TrashIcon />
      </Button>
    </div>
  );
}
