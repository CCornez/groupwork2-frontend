import React from 'react'
import { MdDelete } from 'react-icons/md';
import { BsPencilSquare } from 'react-icons/bs';

const ListItem = () => {
  return (
    <div
      className='box'
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <p>ListItem</p>
      <div className='buttons'>
        <button className='button is-light'>
          <BsPencilSquare />
        </button>
        <button className='button is-danger'>
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

export default ListItem;
