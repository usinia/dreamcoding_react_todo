import { useState } from "react";

export default function InputTodo({ dispatch }) {
  const [title, setTitle] = useState("");
  const handleChange = (e) => {
    const { value } = e.target;
    setTitle(value);
  };
  const handleClick = () => {
    dispatch({ type: "add", title });
    setTitle("");
  };
  return (
    <div className="input-todo">
      <input type="text" name="item" value={title} onChange={handleChange} />
      <button className="add" onClick={handleClick}>
        Add
      </button>
    </div>
  );
}
