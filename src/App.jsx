import React, { useState } from 'react';
import 'bulma/css/bulma.min.css';
import Header from './components/Header';
import CreateArea from './components/CreateArea';
import Note from './components/Note';
import CategoryList from './components/CategoryList';
import ListItem from './components/ListItem';

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

  return (
    <div>
      <Header />
      <div id='user-fields'>
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
      ))}
      {/* test ListItem component */}
      <ListItem />
    </div>
  );
};

export default App;
