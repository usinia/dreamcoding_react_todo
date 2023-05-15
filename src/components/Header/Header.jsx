import React from "react";

export default function Header({ filters, filter, onFilterChange }) {
  const handleClick = (filter) => {
    onFilterChange(filter);
  };

  return (
    <header>
      <ul>
        {filters.map((text, index) => (
          <li key={index}>
            <button onClick={() => handleClick(text)}>{text}</button>
          </li>
        ))}
      </ul>
    </header>
  );
}
