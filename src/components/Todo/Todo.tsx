import React, { useState } from "react";
import "./todo.css";

interface TodoProps {
  todoValue: string;
  onDelete: () => void;
}

const Todo: React.FC<TodoProps> = ({ todoValue, onDelete }) => {
  const [strike, setStrike] = useState<boolean>(false);

  const toggleStrikeThrough = () => {
    setStrike(!strike);
  };

  return (
    <>
      <div className="todoItem">
        <div className="todoText">
          <input type="checkbox" onClick={toggleStrikeThrough} className="strikeBtn"/>
          {strike === false ? (
            <p>{todoValue}</p>
          ) : (
            <p className="strike">{todoValue}</p>
          )}
        </div>
        <button onClick={onDelete}>Delete</button>
      </div>
    </>
  );
};

export default Todo;
