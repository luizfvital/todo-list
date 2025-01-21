import React, { useState } from "react";
import { Input } from "./Components/Input";
import { Task } from "./Components/Task";

import logo from "./assets/logo.png";
import { Button } from "./Components/Button";
import PlusIcon from "./Components/Icons/PlusIcon";
import { nanoid } from "nanoid/non-secure";

import styles from "./app.module.css";

interface Tasks {
  id: string;
  content: string;
  isComplete: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Tasks[]>([]);

  const [inputValue, setInputValue] = useState("");

  const handleOnSetIsComplete = (id: string) => {
    if (!tasks.length) {
      return;
    }
    setTasks(
      tasks.map((task) => {
        return {
          ...task,
          isComplete: task.id === id && !task.isComplete,
        };
      })
    );
  };

  const handleOnDelete = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleCriarButtonOnClick = () => {
    if (!inputValue) {
      return;
    }

    setTasks([
      ...tasks,
      {
        id: nanoid(),
        content: inputValue,
        isComplete: false,
      },
    ]);

    setInputValue("");
  };

  return (
    <div className={styles["app__container"]}>
      <header>
        <img width={126} src={logo} alt="Logo" />
      </header>
      <main>
        <div className={styles["app__input-container"]}>
          <Input
            placeholder="Adicione uma nova tarefa"
            value={inputValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInputValue(e.target.value)
            }
          />
          <Button onClick={handleCriarButtonOnClick}>
            Criar <PlusIcon />
          </Button>
        </div>

        <div className={styles["app__tasks-container"]}>
          {tasks.map(({ id, content, isComplete }) => (
            <Task
              id={id}
              key={id}
              content={content}
              complete={isComplete}
              onDelete={handleOnDelete}
              onSetIsComplete={handleOnSetIsComplete}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
