import { useState } from "react";
import { Input } from "./Components/Input";
import { Task } from "./Components/Task";

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

  return (
    <>
      <h1 style={{ color: "#f2f2f2", textAlign: "center", marginBottom: 32 }}>
        Todo List
      </h1>
      <Input />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 16,
          marginTop: 16,
        }}
      >
        {tasks.map(({ id, content, isComplete }) => (
          <Task
            id={id}
            key={id}
            content={content}
            complete={isComplete}
            onDelete={(id) => console.log("delete clicked: ", id)}
            onSetIsComplete={handleOnSetIsComplete}
          />
        ))}
      </div>
    </>
  );
}

export default App;
