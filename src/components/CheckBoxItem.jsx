import { useState } from "react";

const CheckBoxItem = ({ todo, handleCheck }) => {
  const [checked, setChecked] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const handleCheckbox = () => {
    setChecked(!checked);
    setTimeout(() => {
      setDisabled(true);
    }, 500);

    setTimeout(() => {
      handleCheck(todo.id);
    }, 1500);
  };

  return (
    <div className="flex gap-4 items-center">
      <input
        disabled={disabled}
        className="w-4 h-4 text-purple-600 bg-gray-100 rounded border-gray-300 focus:ring-purple-500"
        type="checkbox"
        id={todo.id}
        value={checked}
        onChange={handleCheckbox}
      />
      <label className="text-sm " for={todo.id}>
        {todo.text}
      </label>
    </div>
  );
};

export default CheckBoxItem;
