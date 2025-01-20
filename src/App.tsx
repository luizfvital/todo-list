import { useState } from "react";
import { Input } from "./Components/Input";
import { Task } from "./Components/Task";

import logo from "./assets/logo.png";
import { Button } from "./Components/Button";
import PlusIcon from "./Components/Icons/PlusIcon";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      content: "This is my first task",
      isComplete: false,
    },
    {
      id: "2",
      content: "This is my second task",
      isComplete: false,
    },
  ]);

  const handleOnSetIsComplete = (id: string) => {
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

  return (
    <div style={{ height: "100vh" }}>
      <header
        style={{
          height: 200,
          backgroundColor: "var(--gray-700",
          display: "grid",
          placeItems: "center",
        }}
      >
        <img width={126} src={logo} alt="Logo" />
      </header>
      <main
        style={{
          maxWidth: 736,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "-27px auto 0",
          padding: "0 8px",
        }}
      >
        <div style={{ display: "flex", gap: 8, width: "100%" }}>
          <Input placeholder="Adicione uma nova tarefa" />
          <Button>
            Criar <PlusIcon />
          </Button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 16,
            marginTop: 16,
            width: "100%",
          }}
        >
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
