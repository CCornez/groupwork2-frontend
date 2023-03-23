import React, { useState, useEffect } from "react";
import "bulma/css/bulma.min.css";
import Header from "./components/Header";
import CreateArea from "./components/CreateArea";
import Note from "./components/Note";
import CategoryList from "./components/CategoryList";
import TodoList from "./components/TodoList";
import ListTemp from "./components/ListTemp";
import ListItem from "./components/ListItem";
import axios from "axios";

const App = (props) => {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  function deleteNotes(id) {
    setNotes((preValue) => {
      return [...preValue.filter((note, index) => index !== id)];
    });
  }
  const [todoLists, setTodoLists] = useState([]);
  const [newTodoListName, setNewTodoListName] = useState("");

  useEffect(() => {
    const fetchTodoLists = async () => {
      try {
        const response = await axios.get(
          "https://s13.syntradeveloper.be/api/v1/lists"
        );
        setTodoLists(response.data.lists);
        console.log(response.data.lists);
        console.log(response.data.lists[0].id);
        console.log(response.data.lists[0].title);
        console.log(response.data.lists);
      } catch (error) {
        console.error("Error fetching todo lists:", error);
      }
    };
    fetchTodoLists();
  }, []);

  const handleAddTodoList = async (e) => {
    e.preventDefault(); // prevent default form submission behavior
  
    if (newTodoListName.trim() === "") {
      return;
    }
  
    try {
      const response = await axios.post(
        "https://s13.syntradeveloper.be/api/v1/list",
        { title: newTodoListName }
      );
  
      const newList = {
        id: response.data.lists[0].id,
        title: response.data.lists[0].title,
        todos: [],
      };
  
      console.log("New Todo List:", newList); // check whether new todo list is added to the todoLists state
      console.log("Todo Lists:", todoLists); // check whether the new todo list is added to the todoLists state
  
      setTodoLists([...todoLists, newList]);
      setNewTodoListName("");
    } catch (error) {
      console.error("Error adding todo list:", error);
    }
  };
  

  const handleTodoListNameChange = (e) => {
    setNewTodoListName(e.target.value);
  };

  return (
    <>
      <Header />
      {/* <div id='user-fields'>
        <CategoryList />
        <CreateArea onAdd={addNote} />
      </div>

      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={deleteNotes}
          category={note.category}
        />
      ))}  */}
      <div>
        <TodoList
          todoLists={todoLists}
          handleAddTodoList={handleAddTodoList}
          newTodoListName={newTodoListName}
          handleTodoListNameChange={handleTodoListNameChange}
        />
      </div>
      {/* test ListItem component */}
      {/* <div>
        <ListTemp />
      </div> */}
    </>
  );
};

export default App;
