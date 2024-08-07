import "./index.css";
import { useState } from "react";
import Add from "./components/AddBtn/Add";
import Input from "./components/InputField/Input";
import Todo from "./components/Todo/Todo";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [todos, setTodos] = useState<Array<string>>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  const handleDeleteTodo = (index: number) => {
    const updatedTodos = todos.filter((_, idx) => idx !== index);
    setTodos(updatedTodos);
  };

  const handleAddTodo = () => {
    if (inputValue === "") {
      toast.error("Empty Todo !");
      return;
    }
    setTodos([...todos, inputValue]);
    setInputValue("");
    toast.success("Todo Added");
  };

  return (
    <>
      <Toaster />
      <div className="main">
        <h1 className="heading">TODOLIST - AI2680</h1>
        <div className="topBar">
          <Input value={inputValue} onChange={handleInputChange} />
          <Add onClick={handleAddTodo} />
        </div>
        <div className="todoContainer">
          {todos.map((todo, idx) => (
            <Todo
              todoValue={todo}
              key={idx}
              onDelete={() => handleDeleteTodo(idx)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
