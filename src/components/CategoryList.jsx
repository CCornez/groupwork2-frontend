import React, { useState } from "react";

const CategoryList = () => {
  const options = ["Store", "Home", "Work", "Kids", "More"];
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(!visible);
  };

  return (
    <div id="category-list" className="p-3">
      <button
        className="button is-warning is-rounded is-outlined is-inverted mt-4"
        onClick={handleClick}
      >
        +
      </button>
      {visible && (
        <aside className="menu mt-2">
          <p className="menu-label">categories</p>
          <ul className="menu-list">
            {options.map((option, index) => (
              <li key={index}>
                <a>{option}</a>
              </li>
            ))}
          </ul>
        </aside>
      )}
    </div>
  );
};

export default CategoryList;
