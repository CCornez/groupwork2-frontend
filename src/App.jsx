import React, { useState } from 'react';
import Header from './components/Header';
import CreateArea from './components/CreateArea';
import Note from './components/Note';
import 'bulma/css/bulma.min.css';

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
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={deleteNotes}
        />
      ))}
    </div>
  );
};

export default App;

// import React, { useState } from "react";
// import Header from "./components/Header";
// import CreateArea from "./components/CreateArea";
// import Note from "./components/Note";
// import "bulma/css/bulma.min.css";

// const App = (props) => {
//   const [notes, setNotes] = useState([]);
//   const [filteredNotes, setFilteredNotes] = useState([]);

//   const addNote = (newNote, category) => {
//     setNotes((prevNotes) => [...prevNotes, { ...newNote, category }]);
//   };

//   const handleFilter = (category) => {
//     const filtered = notes.filter((note) => note.category === category);
//     setFilteredNotes(filtered);
//   };

//   return (
//     <div>
//       <Header onFilter={handleFilter} />
//       <CreateArea onAdd={addNote} />
//       {(filteredNotes.length > 0 ? filteredNotes : notes).map((note, index) => (
//         <Note
//           key={index}
//           id={index}
//           title={note.title}
//           content={note.content}
//           category={note.category}
//         />
//       ))}
//     </div>
//   );
// };

// export default App;
