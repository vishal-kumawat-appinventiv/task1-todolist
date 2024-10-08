import "./index.css";
import { useCallback, useEffect, useState } from "react";
import Todo from "./components/Todo/Todo";
import toast, { Toaster } from "react-hot-toast";
import { TodoType } from "./types";
import Drop from "./components/Dropdown/Drop";
import Clear from "./components/ClearAllBtn/Clear";
import Search from "./components/SearchInput/Search";
import debounce from "lodash.debounce";
import AddDrop from "./components/AddTodoDrop/AddDrop";

function App() {
  const [todos, setTodos] = useState<Array<TodoType>>(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [inputValue, setInputValue] = useState<string>("");
  const [searchValue, setSearchValue] = useState<string>("");
  const [filteredTodos, setFilteredTodos] = useState<Array<TodoType>>([]);

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  const handleDeleteTodo = (index: number) => {
    const updatedTodos = todos.filter((todo) => todo?.id !== index);
    setTodos(updatedTodos);
    setFilteredTodos(updatedTodos);
    toast.success("Todo Deleted", {
      position: "top-right",
    });
  };

  const handleAddTodo = () => {
    if (inputValue === "") {
      toast.error("Empty Todo!", {
        position: "top-right",
      });
      return;
    }
    if (handleDuplicateTodo(inputValue)) {
      toast.error("Dulpicate Todo Found!", {
        position: "top-right",
      });
      return;
    }
    const randomID = Math.floor(Math.random() * 1000) + 1;
    setTodos([
      ...todos,
      {
        id: randomID,
        todoValue: inputValue,
        todoStatus: "incomplete",
      },
    ]);
    setFilteredTodos([
      ...todos,
      {
        id: randomID,
        todoValue: inputValue,
        todoStatus: "incomplete",
      },
    ]);
    setInputValue("");
    toast.success("Todo Added", {
      position: "top-right",
    });
  };

  const handleDuplicateTodo = (message: string) => {
    return todos.some((todo) => todo.todoValue === message);
  };

  const handleToggleTodoStatus = (index: number) => {
    const updatedTodos = todos.map((todo) =>
      todo?.id === index
        ? {
            ...todo,
            todoStatus: (todo.todoStatus === "incomplete"
              ? "completed"
              : "incomplete") as TodoType["todoStatus"],
          }
        : todo
    );
    setTodos(updatedTodos);
    setFilteredTodos(updatedTodos);
  };

  const options = ["All", "Incomplete", "Completed"];

  const handleFilter = (value: string) => {
    if (value === "incomplete") {
      setFilteredTodos(
        todos.filter((todo) => todo.todoStatus === "incomplete")
      );
    } else if (value === "completed") {
      setFilteredTodos(todos.filter((todo) => todo.todoStatus === "completed"));
    } else if (value === "all") {
      setFilteredTodos(todos);
    }
  };

  const handleClearAll = () => {
    if (todos.length === 0) {
      toast.error("Already Cleared.", {
        position: "top-right",
      });
      return;
    }
    setTodos([]);
    setFilteredTodos([]);
    toast.success("All Todo Cleared", {
      position: "top-right",
    });
  };

  const debounceSearch = useCallback(
    debounce((value: string) => {
      const lowercasedValue = value.toLowerCase();
      setFilteredTodos(
        todos.filter((todo) =>
          todo.todoValue.toLowerCase().includes(lowercasedValue)
        )
      );
    }, 500),
    [todos]
  );

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
    debounceSearch(value);
  };

  useEffect(() => {
    setFilteredTodos(todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Toaster />
      <div className="main">
        <h1 className="heading">Task 1 : Todolist - AI2680</h1>
        <div className="topBar">
          <Search value={searchValue} onChange={handleSearchChange} />
          <AddDrop
            inputValue={inputValue}
            onChange={handleInputChange}
            onClick={handleAddTodo}
          />
          <Clear onClick={handleClearAll} />
          <Drop options={options} currOption={handleFilter} />
        </div>
        <div className="todoContainer">
          {filteredTodos.length === 0 ? (
            <>
              <h2>No Todo Found !</h2>
            </>
          ) : (
            filteredTodos.map((eachTodo, idx) => (
              <Todo
                todo={eachTodo}
                key={idx}
                onDelete={() => handleDeleteTodo(eachTodo?.id)}
                onToggle={() => handleToggleTodoStatus(eachTodo?.id)}
              />
            ))
          )}
        </div>
        <div>
          <h4>Made with 💛 in Appinventiv </h4>
        </div>
      </div>
    </>
  );
}

export default App;
