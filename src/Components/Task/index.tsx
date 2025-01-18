import { Button } from "../Button";
import { Checkbox } from "../Checkbox";
import TrashIcon from "../Icons/TrashIcon";
import styles from "./index.module.css";

interface TaskProps {
  id: string;
  content: string;
  complete?: boolean;
  onSetIsComplete: (id: string) => void;
  onDelete: (id: string) => void;
}

export function Task({
  id,
  content,
  complete,
  onSetIsComplete,
  onDelete,
}: TaskProps) {
  const handleOnDelete = (id: string) => {
    onDelete(id);
  };

  const handleOnSetIsComplete = (id: string) => {
    onSetIsComplete(id);
  };

  return (
    <div
      className={`${styles.task} ${complete ? styles["task--complete"] : ""}`}
    >
      <div>
        <Checkbox
          onChange={() => handleOnSetIsComplete(id)}
          checked={complete}
        />
        {content}
      </div>
      <Button variant="icon" onClick={() => handleOnDelete(id)}>
        <TrashIcon />
      </Button>
    </div>
  );
}
