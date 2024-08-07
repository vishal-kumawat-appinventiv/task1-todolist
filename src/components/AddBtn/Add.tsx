import React from "react";
import "./add.css";

interface AddProps {
  onClick: () => void;
}

const Add: React.FC<AddProps> = ({ onClick }) => {
  return <button onClick={onClick}>Add</button>;
};

export default Add;
