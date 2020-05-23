import React, { useReducer } from "react";
import { initialState, todoReducer } from "./reducers/todoReducer";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./components/Todo.css";

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = newTodo => {
    dispatch({ type: "ADD_TODO", payload: newTodo });
  };

  const toggleComplete = id => {
    dispatch({ type: "TOGGLE_COMPLETE", payload: id });
  };

  const removeTodos = () => {
    dispatch({ type: "REMOVE_TODOS" });
  };

  return (
    <div className="App">
      <h1>a cool and nice todo app</h1>
      <div className="todo-container">
        <TodoForm addTodo={addTodo} removeTodos={removeTodos} />
        <TodoList todos={state.todos} toggleComplete={toggleComplete} />
      </div>
    </div>
  );
}

export default App;
