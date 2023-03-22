import React, { useState, useEffect } from "react";

const CreateArea = ({ onAdd }) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
    category: "",
  });

  const [categories, setCategories] = useState([]);

  const [error, setError] = useState(false);

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
    event.preventDefault();
    if (note.title.trim() !== "" && note.content.trim() !== "") {
      onAdd(note);
      setCategories((prevCategories) => {
        if (prevCategories.includes(note.category)) {
          return prevCategories;
        } else {
          return [...prevCategories, note.category];
        }
      });
      setNote({
        title: "",
        content: "",
        category: "",
      });
      setError(false);
    } else {
      setError(true);
    }
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
                required
              />

              <p>
                <textarea
                  className="my-1 mx-1 is-size-6"
                  value={note.content}
                  name="content"
                  placeholder="Take a note..."
                  onChange={handleChange}
                  required
                >
                  {" "}
                </textarea>
              </p>

              <select
                name="category"
                onChange={handleChange}
                className="my-1 mx-1 mb-2 is-size-6"
                value={note.category}
              >
                <option value="">Category</option>

                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>

              <input
                name="category"
                onChange={handleChange}
                className="my-1 mx-1 mb-2 is-size-6"
                value={note.category}
                type="text"
                placeholder="New category"
              />

              {error && (
                <p className="help is-danger">
                  Title and content cannot be empty!
                </p>
              )}

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
