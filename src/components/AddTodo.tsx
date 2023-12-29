import { FormEvent, useState } from "react";

const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const handleFormSubmit = (e: FormEvent<HTMLElement>) => {
    e.preventDefault();
    handleAddTodo(todo);
    setTodo("");
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddTodo;
