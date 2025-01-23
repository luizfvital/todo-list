import React, { useState, useMemo } from "react";
import { Input } from "./Components/Input";
import { Task } from "./Components/Task";

import logo from "./assets/logo.png";
import { Button } from "./Components/Button";
import PlusIcon from "./Components/Icons/PlusIcon";
import { nanoid } from "nanoid/non-secure";

import styles from "./app.module.css";

import clipboard from "./assets/clipboard.png";

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

    const task = tasks.find((task) => task.id === id);

    if (task) {
      const newTask = {
        ...task,
        isComplete: task.isComplete ? false : true,
      };

      setTasks(
        tasks.map((task) => {
          if (task.id !== id) {
            return task;
          }

          return newTask;
        })
      );
    }
  };

  const handleOnDelete = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleCriarButtonOnClick = (e: React.FormEvent) => {
    e.preventDefault();
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

  const tasksCompleted = useMemo(() => {
    const completed = tasks.filter((task) => task.isComplete);
    if (completed.length) {
      return `${completed.length} de ${tasks.length}`;
    }

    return "0";
  }, [tasks]);

  return (
    <div className={styles["app__container"]}>
      <header>
        <img width={126} src={logo} alt="Logo" />
      </header>
      <main>
        <form className={styles["app__input-container"]}>
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
        </form>

        <div className={styles["app__status-container"]}>
          <div>
            <span>Tarefas criadas</span>
            <span>{tasks.length}</span>
          </div>
          <div>
            <span>Concluídas</span>
            <span>{tasksCompleted}</span>
          </div>
        </div>

        {tasks.length ? (
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
        ) : (
          <div className={styles["app__no-tasks-container"]}>
            <img width={56} height={56} src={clipboard} alt="Clipboard image" />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            Crie tarefas e organize seus itens a fazer
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
