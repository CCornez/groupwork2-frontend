import React from "react";

const Note = ({ title, content, onDelete, id }) => {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="columns is-1 is-variable is-centered">
            <div className="column">
              <div className="card">
                <div className="card-content">
                  <button
                    className="delete"
                    onClick={() => {
                      onDelete(id);
                    }}
                  ></button>
                  <h1 className="is-size-5 has-text-weight-bold">{title}</h1>
                  <p>{content}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Note;
