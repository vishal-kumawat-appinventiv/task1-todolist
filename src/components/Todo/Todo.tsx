import React from 'react';

interface TodoProps {
  todoValue: string;
  onDelete: () => void;
}

const Todo: React.FC<TodoProps> = ({ todoValue, onDelete }) => {
  return (
    <>
      <p>{todoValue}</p>
      <button onClick={onDelete}>Delete</button>
    </>
  );
};

export default Todo;
