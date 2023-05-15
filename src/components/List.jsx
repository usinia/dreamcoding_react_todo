import { Fragment, useCallback } from "react";
import useTodo from "../hooks/use-todo";

export default function List({ todo, dispatch }) {
  const handleChange = useCallback((e) => {
    const { name, checked } = e.target;
    dispatch({ type: "update", index: Number(name), checked });
  }, []);
  const handleDelete = useCallback((index) => {
    dispatch({ type: "delete", index });
  }, []);

  return (
    <div className="list">
      {todo.map((v, index) => (
        <Fragment key={index}>
          <input
            type="checkbox"
            id={`chk${index}`}
            name={index}
            checked={v.state}
            onChange={handleChange}
          />
          <label htmlFor={`chk${index}`}>{v.title}</label>
          <button className="delete" onClick={() => handleDelete(index)}>
            {index} delete
          </button>
        </Fragment>
      ))}
    </div>
  );
}
