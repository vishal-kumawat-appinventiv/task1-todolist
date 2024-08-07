import React from "react";
import "./todo.css";

interface TodoProps {
  todoValue: string;
  onDelete: () => void;
}

const Todo: React.FC<TodoProps> = ({ todoValue, onDelete }) => {
  return (
    <>
      <div className="todoItem">
        <p>{todoValue}</p>
        <button onClick={onDelete}>Delete</button>
      </div>
    </>
  );
};

export default Todo;
