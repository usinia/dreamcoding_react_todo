import React, { useState } from "react";
import TodoList from "./components/TodoList/TodoList";
import Header from "./components/Header/Header";

const filters = ["all", "active", "completed"];
export default function AppWith() {
  const [filter, setFilter] = useState(filters[0]);

  return (
    <div>
      <Header filters={filters} filter={filter} onFilterChange={setFilter} />
      <TodoList filter={filter} />
    </div>
  );
}
