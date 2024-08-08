import "./index.css";
import { useState } from "react";
import Add from "./components/AddBtn/Add";
import Input from "./components/InputField/Input";
import Todo from "./components/Todo/Todo";
import toast, { Toaster } from "react-hot-toast";
import { TodoType } from "./types";

function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  const handleDeleteTodo = (index: number) => {
    const updatedTodos = todos.filter((_, idx) => idx !== index);
    setTodos(updatedTodos);
    toast.success("Todo Deleted");
  };

  const handleAddTodo = () => {
    if (inputValue === "") {
      toast.error("Empty Todo!");
      return;
    }
    setTodos([
      ...todos,
      {
        todoValue: inputValue,
        todoStatus: "incomplete",
      },
    ]);
    setInputValue("");
    toast.success("Todo Added");
  };

  const handleToggleTodoStatus = (index: number) => {
    const updatedTodos = todos.map((todo, idx) =>
      idx === index
        ? {
            ...todo,
            // todoStatus: todo.todoStatus === "incomplete" ? "completed" : "incomplete",
            todoStatus: (todo.todoStatus === "incomplete"
              ? "completed"
              : "incomplete") as "incomplete" | "completed",
          }
        : todo
    );
    setTodos(updatedTodos);
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
          {todos.map((eachTodo, idx) => (
            <Todo
              todo={eachTodo}
              key={idx}
              onDelete={() => handleDeleteTodo(idx)}
              onToggle={() => handleToggleTodoStatus(idx)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
