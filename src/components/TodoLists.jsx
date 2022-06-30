import { useState } from "react";
import Header from "./Header";
import ListCheckboxes from "./ListCheckboxes";
import InputNota from "./InputNota";
import ButtonAgregar from "./ButtonAgregar";

const TodoLists = () => {
  const [todos, setTodos] = useState([]);
  const [nota, setNota] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (nota.trim() === "") return;

    const notaObject = {
      id: Date.now(),
      text: nota,
    };

    setTodos([...todos, notaObject]);
    setNota("");
  };

  const handleCheck = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div className="container w-80 md:w-1/3 h-2/4 bg-white mx-auto rounded-md shadow relative">
      <Header />
      <hr className="mx-4 border-t-2" />
      <ListCheckboxes todos={todos} handleCheck={handleCheck} />
      <InputNota handleAddTodo={handleAddTodo} nota={nota} setNota={setNota} />
      <ButtonAgregar handleAddTodo={handleAddTodo} />
    </div>
  );
};

export default TodoLists;
