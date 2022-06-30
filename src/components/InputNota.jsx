import { useState } from "react";

const InputNota = ({ nota, setNota, handleAddTodo }) => {
  return (
    <form className="pb-8 pt-4 px-5" onSubmit={handleAddTodo}>
      <input
        type="text"
        value={nota}
        onChange={(e) => setNota(e.target.value)}
        className="w-full p-3 rounded-md bg-gray-100 text-sm"
        placeholder="notes..."
      />
    </form>
  );
};

export default InputNota;
