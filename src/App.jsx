import { Fragment, useContext, useState } from "react";
import "./App.css";
import DarkModeProvider, { DarkModeContext } from "./context/DarkModeContext";

function App() {
  return (
    <div className="App">
      <DarkModeProvider>
        <Header />
        <List></List>
        <InputTodo></InputTodo>
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

function List() {
  // const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  const [list, setList] = useState(initialList);
  const handleChange = (e) => {
    const { name, checked } = e.target;
    setList((prev) =>
      prev.map((p, i) => (i == name ? { ...p, state: checked } : p))
    );
  };
  const handleDelete = (index) => {
    setList((prev) => prev.filter((p, i) => i !== index));
  };

  return (
    <div className="list">
      {list.map((todo, index) => (
        <Fragment key={index}>
          <input
            type="checkbox"
            id={`chk${index}`}
            name={index}
            checked={todo.state}
            onChange={handleChange}
          />
          <label htmlFor={`chk${index}`}>{todo.title}</label>
          <button className="delete" onClick={() => handleDelete(index)}>
            {index} delete
          </button>
        </Fragment>
      ))}
    </div>
  );
}

function InputTodo() {
  const [list, setList] = useState(initialList);
  const [title, setTitle] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTitle(value);
  };
  const handleClick = () => {
    setList((prev) => [...prev, { state: false, title }]);
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
