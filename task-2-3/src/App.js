import "./App.css";
import Input from "./components/Input";
import List from "./components/List";
import { useState } from "react";
function App() {
  const [tasks, setTasks] = useState([]);
  return (
    <div className="App">
      <Input tasks={tasks} setTasks={setTasks} />
      <List tasks={tasks} />
    </div>
  );
}

export default App;
