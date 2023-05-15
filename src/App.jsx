import { Fragment, useCallback, useContext, useReducer, useState } from "react";
import "./App.css";
import DarkModeProvider, { DarkModeContext } from "./context/DarkModeContext";
import todoReducer from "./reducer/todo-reducer";

function App() {
  const initialList = [
    {
      state: true,
      title: "강의보기",
    },
    {
      state: false,
      title: "카페가기",
    },
    {
      state: false,
      title: "청소하기",
    },
  ];

  const [todo, dispatch] = useReducer(todoReducer, initialList);

  return (
    <div className="App">
      <DarkModeProvider>
        <Header />
        <List todo={todo} dispatch={dispatch}></List>
        <InputTodo todo={todo} dispatch={dispatch}></InputTodo>
      </DarkModeProvider>
    </div>
  );
}

function Header() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <header>
      <button className="mode" onClick={toggleDarkMode}>
        {darkMode.toString()}
      </button>
      <button className="all">All</button>
      <button className="acctive">Active</button>
      <button className="completed">Completed</button>
    </header>
  );
}

function List({ todo, dispatch }) {
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

function InputTodo({ dispatch }) {
  const [title, setTitle] = useState("");
  const handleChange = (e) => {
    const { value } = e.target;
    setTitle(value);
  };
  const handleClick = () => {
    dispatch({ type: "add", title });
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

export default App;
