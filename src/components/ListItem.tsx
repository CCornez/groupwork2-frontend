import React, { useState } from 'react'
import { MdDelete } from 'react-icons/md';
import { BsPencilSquare } from 'react-icons/bs';

const ListItem = (props: any) => {
  interface Item {
    id: number;
    todo_lists_id: number;
    title: string;
    is_completed: boolean;
  }

  const {id, title, todo_lists_id, is_completed}: Item = props.listItem;
  
  const [value, setValue] = useState(title)
  const [completed, setCompleted] = useState(is_completed)

  const handleItemClick = (e) => {
    // const id = e.currentTarget.dataset.id;
    console.dir();
    
    if(e.target.classList.contains("box") || e.target.nodeName === 'INPUT') setCompleted((prevState) => !prevState)
  }

  const handleEditItem = () => {

  }
  const handleDeleteItem = () => {

  }

  return (
    <div
      className={`box ${completed ? " has-background-primary" : ""}`}
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        cursor: 'pointer'
      }}
      data-id={id}
      onClick={handleItemClick}
    >
      <input className={`input ${completed ? " is-primary has-background-primary has-text-white" : "is-white has-background-white"}`} value={value} disabled style={{cursor: 'pointer'}}/>
      <div className='buttons'>
        <button className='button is-light' onClick={handleEditItem}>
          <BsPencilSquare />
        </button>
        <button className='button is-danger' onClick={handleDeleteItem}>
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

export default ListItem;
