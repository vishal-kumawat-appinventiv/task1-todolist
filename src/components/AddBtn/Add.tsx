import React from 'react';

interface AddProps {
  onClick: () => void;
}

const Add: React.FC<AddProps> = ({ onClick }) => {
  return (
    <button onClick={onClick}>Add</button>
  );
};

export default Add;
