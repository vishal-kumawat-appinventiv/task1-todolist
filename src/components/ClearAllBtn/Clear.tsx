import "./clear.css";

interface ClearProps {
  onClick: () => void;
}

const Clear: React.FC<ClearProps> = ({ onClick }) => {
  return (
    <>
      <button onClick={onClick} className="clearBtn">
        ClearAll
      </button>
    </>
  );
};

export default Clear;
