import React, { useState } from "react";
import Note from "./Note";

const CreateArea = ({ onAdd }) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setNote((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  }

  const submitButton = (event) => {
    onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  };
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="columns is-centered">
            <form className="box" id="title-box">
              <input
                name="title"
                onChange={handleChange}
                className="my-1 mx-1 mb-2 is-size-5 has-text-weight-bold"
                value={note.title}
                type="text"
                placeholder="Title"
              />
              <p>
                <textarea
                  className="my-1 mx-1 is-size-6"
                  value={note.content}
                  name="content"
                  placeholder="Take a note..."
                  onChange={handleChange}
                >
                  {" "}
                </textarea>
              </p>
              <button
                className="button is-warning is-rounded"
                type="submit"
                onClick={submitButton}
              >
                +
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default CreateArea;
