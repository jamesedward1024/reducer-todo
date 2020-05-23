import React from "react";
import Todo from "./Todo";

function TodoList({ todos, toggleComplete }) {
  return (
    <div className="todo-list">
      <ul>
        {todos.map(todo => {
          return (
            <li>
              <Todo key={todo.id} todo={todo} toggleComplete={toggleComplete} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;