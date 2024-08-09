import "./search.css";
import React from "react";

interface SearchProps {
  value: string;
  onChange: (value: string) => void;
}

const Input: React.FC<SearchProps> = ({ value, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <input
      className="search"
      type="text"
      value={value}
      onChange={(e) => handleChange(e)}
      placeholder="Search Todos.."
    />
  );
};

export default Input;
