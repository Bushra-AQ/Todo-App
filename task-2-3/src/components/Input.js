import React, { useState } from "react";
import LatestTask from "./LatestTask";
const Input = ({ tasks, setTasks }) => {
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    setTasks([...tasks, newTask]);
    setNewTask("");
  };
  return (
    <div className="input">
      <LatestTask LatestTask={tasks[tasks.length - 1]} />
      <input
        className="inputField"
        type="text"
        placeholder="Enter Task"
        value={newTask}
        onChange={(e) => {
          setNewTask(e.target.value);
        }}
      />
      <button style={{ backgroundColor: newTask === "" ? "red" : "grey" }} className="btn" onClick={addTask}>
        ADD
      </button>
    </div>
  );
};

export default Input;
