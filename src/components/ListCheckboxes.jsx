import CheckBoxItem from "./CheckBoxItem";

const ListCheckboxes = ({ todos, handleCheck }) => {
  return (
    <div className="flex gap-3 flex-col p-5 w-full ">
      {todos.map((todo) => (
        <CheckBoxItem key={todo.id} todo={todo} handleCheck={handleCheck} />
      ))}
    </div>
  );
};

export default ListCheckboxes;
