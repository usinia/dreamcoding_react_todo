import React, { useEffect, useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";

export default function TodoList({ filter }) {
  const [todos, setTodos] = useState([
    { id: "123", text: "공부하기", status: "active" },
    { id: "124", text: "놀기", status: "active" },
  ]);

  const handleAdd = (todo) => setTodos([...todos, todo]);
  const handleUpdate = (todo) =>
    setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
  const handleDelete = (todo) =>
    setTodos(todos.filter((t) => t.id !== todo.id));

  const getFiltered = (todos, filter) => {
    if (filter === "all") return todos;
    return todos.filter((todo) => todo.status === filter);
  };
  const filtered = getFiltered(todos, filter);

  return (
    <div>
      <ul>
        {filtered.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </div>
  );
}
