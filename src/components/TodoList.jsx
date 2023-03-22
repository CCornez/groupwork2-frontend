import React, { useState } from "react";
import { nanoid } from "nanoid";


const TodoList = () => {
  const [todoLists, setTodoLists] = useState([]);
  const [newTodoListName, setNewTodoListName] = useState("");

  const handleAddTodoList = (e) => {
    e.preventDefault();
    if (newTodoListName) {
      setTodoLists((prevTodoLists) => [
        ...prevTodoLists,
        { id: nanoid(), name: newTodoListName, todos: [] },
      ]);
      setNewTodoListName("");
    }
  };

  const handleTodoListNameChange = (e) => {
    setNewTodoListName(e.target.value);
  };

  return (
    <div className="container">
      <form onSubmit={handleAddTodoList}>
        <div className="field has-addons">
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Add your todo list"
              value={newTodoListName}
              onChange={handleTodoListNameChange}
            />
          </div>
          <div className="control">
            <button className="button is-primary" type="submit">
              Add a todo list
            </button>
          </div>
        </div>
      </form>
      <div className="columns is-multiline">
        {todoLists.map((todoList) => (
          <div className="column is-one-quarter" key={todoList.id}>
            <div className="card">
              <div className="card-header">
                <p className="card-header-title">{todoList.name}</p>
              </div>
              <div className="card-content">
                <div className="content">
                  <ul>
                    {todoList.todos.map((todo) => (
                      <li key={todo.id}>{todo.text}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
