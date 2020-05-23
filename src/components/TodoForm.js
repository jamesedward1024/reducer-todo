import React, { useState } from "react";

function TodoForm({ addTodo, removeTodos }) {
  const [newTodo, setNewTodo] = useState({ item: "", date: "" });

  const handleInputChange = e => {
    setNewTodo({ ...newTodo, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (newTodo.item === "") {
      return;
    } else {
      addTodo(newTodo);
      setNewTodo({ item: "", date: "" });
    }
  };

  const handleClear = e => {
    e.preventDefault();
    removeTodos();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="enter a todo..."
        value={newTodo.item}
        name="item"
        onChange={handleInputChange}
      />
      <input
        type="text"
        placeholder="when is it due? (mm/dd/yy)"
        value={newTodo.date}
        name="date"
        onChange={handleInputChange}
      />
      <button type="submit">add</button>
      <button type="button" onClick={e => handleClear(e)}>
        clear completed
      </button>
    </form>
  );
}

export default TodoForm;
