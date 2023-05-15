import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

export default function Todo({ todo, onUpdate, onDelete }) {
  const { id, text, status } = todo;
  const handleChange = (e) => {
    const status = e.target.checked ? "completed" : "active";
    onUpdate({ ...todo, status });
  };
  const handleClick = () => onDelete(todo);

  return (
    <li key={id}>
      <input
        type="checkbox"
        id={`chk${id}`}
        checked={status === "completed"}
        onChange={handleChange}
      />
      <label htmlFor={`chk${id}`}>{text}</label>
      <button onClick={handleClick}>
        <FaTrashAlt />
      </button>
    </li>
  );
}
