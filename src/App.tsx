import { Button } from "./Components/Button";
import { Checkbox } from "./Components/Checkbox";
import PlusIcon from "./Components/Icons/PlusIcon";
import TrashIcon from "./Components/Icons/TrashIcon";
import { Input } from "./Components/Input";

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
        <Button>
          Criar <PlusIcon />
        </Button>
        <Button variant="icon">
          <TrashIcon />
        </Button>
        <Checkbox />
        <Input />
      </div>
    </>
  );
}

export default App;
