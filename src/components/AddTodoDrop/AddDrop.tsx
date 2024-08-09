import "./addDrop.css";
import { useState } from "react";
import Input from "../InputField/Input";
import Add from "../AddBtn/Add";

interface DropWithInputProps {
  inputValue: string;
  onChange: (value: string) => void;
  onClick: () => void;
}

const AddDrop: React.FC<DropWithInputProps> = ({
  inputValue,
  onChange,
  onClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="addDropdown">
      <button className="addDropdownButton" onClick={toggleDropdown}>
        {isOpen ? "Close" : "Add Todo"}
      </button>
      {isOpen && (
        <div className="addDropdownMenu">
          <Input value={inputValue} onChange={onChange} />
          <Add onClick={onClick} />
        </div>
      )}
    </div>
  );
};

export default AddDrop;
