import { Input } from "./Components/Input";
import { Task } from "./Components/Task";

function App() {
  return (
    <>
      <h1 style={{ color: "#f2f2f2", textAlign: "center", marginBottom: 32 }}>
        Todo List
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 16,
        }}
      >
        <Input />
        <Task
          content="Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer."
          complete={true}
          onDelete={() => {}}
          onSetIsComplete={() => {}}
        />
      </div>
    </>
  );
}

export default App;
