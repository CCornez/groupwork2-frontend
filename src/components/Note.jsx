import React, { useState } from "react";

const Note = ({ title, content, category, onDelete, id }) => {
  return (
    <div id="note">
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
                  <h1 className="is-size-5 has-text-weight-bold">
                    {title}{" "}
                    <span className="has-text-right is-size-7 is-italic has-text-weight-bold">
                      ({category})
                    </span>
                  </h1>

                  <p>{content}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Note;
