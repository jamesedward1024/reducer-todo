import React from "react";
import moment from "moment";

function Todo({ todo, toggleComplete }) {
  return (
    <div
      onClick={() => toggleComplete(todo.id)}
      className={todo.completed ? "todo-item complete" : "todo-item incomplete"}
    >
      {todo.item}
      {todo.completed && (
        <div className="todo-date">
          Completed {moment().format("MMM Do YYYY, h:mm a")}
        </div>
      )}
      {!todo.completed && todo.dueDate && (
        <div className="todo-date">
          Due {moment(todo.dueDate, "MM-DD-YY").fromNow()}
          {moment(todo.dueDate, "MM-DD-YY").diff() < 0 && <span>OVERDUE</span>}
        </div>
      )}
    </div>
  );
}

export default Todo;