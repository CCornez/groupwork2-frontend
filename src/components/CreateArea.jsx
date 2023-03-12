import React from "react";

const CreateArea = (props) => {
  return (
    <>
      <section className="section has-text-centerd">
        <div className="container">
          <div className="columns is-centered">
            <form action="" className="box " id="title-box">
              <input
                className="my-1 mx-1 mb-2 is-size-5 has-text-weight-bold"
                type="text"
                placeholder="Title"
              />
              <p>
                <textarea
                  className="my-1 mx-1 is-size-6"
                  name="content"
                  id=""
                  placeholder="Take a note..."
                ></textarea>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default CreateArea;
