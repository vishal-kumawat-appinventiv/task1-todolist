import React from "react";
import "./todo.css";
import { TodoType } from "../../types";

interface TodoProps {
  todo: TodoType;
  onDelete: () => void;
  onToggle: () => void;
}

const Todo: React.FC<TodoProps> = ({ todo, onDelete, onToggle }) => {
  return (
    <>
      <div
        className={`todoItem ${todo?.todoStatus === "completed" && "bg-green"}`}
      >
        <div className="todoText">
          <input
            type="checkbox"
            checked={todo.todoStatus === "completed"}
            onChange={onToggle}
            className="strikeBtn"
          />
          {todo?.todoStatus === "incomplete" ? (
            <p className="textPara">{todo?.todoValue}</p>
          ) : (
            <p className="strike textPara">{todo?.todoValue}</p>
          )}
        </div>
        <button onClick={onDelete}>Delete</button>
      </div>
    </>
  );
};

export default Todo;
