import { useContext, useReducer, useState } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

export default function Header({ setState }) {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <header>
      <button className="mode" onClick={toggleDarkMode}>
        {darkMode.toString()}
      </button>
      <button className="all" onClick={() => setState("all")}>
        All
      </button>
      <button className="active" onClick={() => setState("active")}>
        Active
      </button>
      <button className="completed" onClick={() => setState("completed")}>
        Completed
      </button>
    </header>
  );
}
