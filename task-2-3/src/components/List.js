import React from "react";

const List = ({ tasks }) => {
  return (
    <div className="list">
      <ul>
        {tasks.map((task, index) => (
          <li style={{textAlign: 'left'}}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
