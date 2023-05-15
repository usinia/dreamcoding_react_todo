import { useState } from "react";
import "./App.css";
import DarkModeProvider, { DarkModeContext } from "./context/DarkModeContext";
import Header from "./components/Header";
import List from "./components/List";
import InputTodo from "./components/InputTodo";
import useTodo from "./hooks/use-todo";

function App() {
  const [state, setState] = useState("all");
  const [todo, dispatch, filteredTodo, handleState] = useTodo({ state });

  return (
    <div className="App">
      <DarkModeProvider>
        <Header setState={setState} />
        <List todo={filteredTodo} dispatch={dispatch}></List>
        <InputTodo todo={todo} dispatch={dispatch}></InputTodo>
      </DarkModeProvider>
    </div>
  );
}

export default App;
