import { useState } from "react";

const TodoLists = () => {
  const [todos, setTodos] = useState([]);
  const [nota, setNota] = useState("");

  const handleAddTodo = () => {
    if (nota.trim() === "") return;

    const notaObject = {
      id: Date.now(),
      text: nota,
    };

    setTodos([...todos, notaObject]);
    setNota("");
  };

  return (
    <div className="container w-1/3 bg-white mx-auto rounded-md shadow relative">
      {/* parte del header */}
      <div className="flex p-5 justify-between">
        <div>
          <h1 className="font-bold text-xl">Daily UI Todo List</h1>
          <p className="text-gray-600 text-sm">Practice Design Everyday</p>
        </div>
        <p>X</p>
      </div>

      {/* parte del body */}
      <div className="flex flex-col p-5 w-full ">
        {todos.map((todo) => (
          <label key={todo.id}>
            <input type="checkbox" />
            {todo.text}
          </label>
        ))}
      </div>

      {/* parte del footer */}
      <div className="pb-8 pt-4 px-5">
        <input
          type="text"
          value={nota}
          onChange={(e) => setNota(e.target.value)}
          className="w-full p-3 rounded-md bg-gray-100 text-sm"
          placeholder="notes..."
        />
      </div>

      {/* Boton agregar */}
      <div className="bottom-20 right-5 absolute">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-11 w-11 fill-purple-600 hover:fill-purple-700 cursor-pointer"
          viewBox="0 0 20 20"
          fill="currentColor"
          onClick={handleAddTodo}
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default TodoLists;
