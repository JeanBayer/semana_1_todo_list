import React from "react";

const ButtonAgregar = ({ handleAddTodo }) => {
  return (
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
  );
};

export default ButtonAgregar;
