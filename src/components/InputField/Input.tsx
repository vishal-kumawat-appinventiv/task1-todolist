import React from "react";
import "./input.css";

interface InputProps {
  value: string;
  onChange: (value: string) => void;
}

const Input: React.FC<InputProps> = ({ value, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <input
      className="addInput"
      type="text"
      value={value}
      onChange={(e) => handleChange(e)}
      placeholder="Add Todo.."
    />
  );
};

export default Input;
