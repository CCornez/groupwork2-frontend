import React, { useState } from "react";
import Header from "./components/Header";
import CreateArea from "./components/CreateArea";
import Note from "./components/Note";
import "bulma/css/bulma.min.css";

const App = (props) => {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
        />
      ))}
    </div>
  );
};

export default App;
