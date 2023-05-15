export default function todoReducer(todo, action) {
  switch (action.type) {
    case "add": {
      const { title } = action;
      return [...todo, { title, state: false }];
    }
    case "update": {
      const { index, checked } = action;
      return todo.map((v, i) => (i === index ? { ...v, state: checked } : v));
    }
    case "delete": {
      const { index } = action;
      return todo.filter((_, i) => i !== index);
    }
    default: {
      throw new Error(`알 수 없는 액션 타입 ${action.type}`);
    }
  }
}
