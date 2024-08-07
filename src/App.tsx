import { useState } from "react";
import Add from "./components/AddBtn/Add";
import Input from "./components/InputField/Input";
import Todo from "./components/Todo/Todo";

function App() {
  const [todos, setTodos] = useState<Array<string>>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  const handleAddTodo = () => {
    if (inputValue === "") {
      alert("Cant add Empty ToDo!");
    }
    setTodos([...todos, inputValue]);
    setInputValue("");
  };

  console.log(todos);

  return (
    <>
      <div className="main">
        <div className="topBar">
          <Input value={inputValue} onChange={handleInputChange} />
          <Add onClick={handleAddTodo} />
        </div>
        <div className="todoContainer">
          {todos.map((todo, idx) => (
            <Todo todoValue={todo} key={idx} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
