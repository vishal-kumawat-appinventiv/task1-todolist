import React, { useState } from "react";
import "./drop.css";

interface DropdownProps {
  options: string[];
  currOption: (value: string) => void;
}

const Drop: React.FC<DropdownProps> = ({ options, currOption }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    currOption(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button className="dropdownButton" onClick={toggleDropdown}>
        {selectedOption || "Select an option"}
      </button>
      {isOpen && (
        <ul className="dropdownMenu">
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleOptionClick(option)}
              className="dropdownItem"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Drop;
