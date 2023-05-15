import { useEffect, useReducer, useState } from "react";
import todoReducer from "../reducer/todo-reducer";

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

export default function useTodo({ state }) {
  const [todo, dispatch] = useReducer(todoReducer, initialList);
  const [filteredTodo, setFilteredTodo] = useState(todo);
  const handleState = (state) => {
    switch (state) {
      case "all": {
        return setFilteredTodo(todo);
      }
      case "active": {
        return setFilteredTodo(todo.filter((v) => !v.state));
      }
      case "completed": {
        return setFilteredTodo(todo.filter((v) => v.state));
      }
      default: {
        throw new Error(`알 수 없는 state ${state}`);
      }
    }
  };
  useEffect(() => {
    handleState(state);
  }, [todo, state]);

  return [todo, dispatch, filteredTodo, handleState];
}
