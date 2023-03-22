import React, { useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { BsPencilSquare, BsFillCheckSquareFill } from 'react-icons/bs';

const ListItem = (props: any) => {
  /**
   * Variables
   */

  // interface
  interface Item {
    id: number;
    todo_lists_id: number;
    title: string;
    is_completed: boolean;
  }

  // props
  const { id, title, todo_lists_id, is_completed }: Item = props.listItem;

  // states
  const [value, setValue] = useState(title);
  const [completed, setCompleted] = useState(is_completed);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isModal, setIsModal] = useState(false);

  /**
   * Events
   */

  const handleItemClick = (e) => {
    // TODO: update complete in db
    // const id = e.currentTarget.dataset.id;

    // check if user is changing a list item and if the modal is open
    if (!isUpdating && !isModal) {
      // check if clicking on the box
      if (e.target.classList.contains('box') || e.target.nodeName === 'INPUT') {
        setCompleted((prevState) => !prevState);
      }
    }
  };

  const handleItemEdit = (e) => {
    const inputRef = e.target.closest('.box').querySelector('.input');
    if (!isUpdating) {
      setIsUpdating(true);
      if (inputRef) {
        inputRef.disabled = false;
      }
    } else {
      setIsUpdating(false);
      if (inputRef) {
        inputRef.disabled = true;
      }
    }
  };

  const handleItemChange = (e) => {
    setValue(e.currentTarget.value);
  };

  const openModal = (e) => {
    setIsModal(true);
    e.target
      .closest('.listItem')
      .querySelector('.modal')
      .classList.add('is-active');
  };
  const closeModal = (e) => {
    // close if clicked outside of modal or on cancel button
    if (
      !e.target.closest('.deleteModal') ||
      e.currentTarget.classList.contains('button')
    ) {
      setIsModal(true);
      e.target
        .closest('.listItem')
        .querySelector('.modal')
        .classList.remove('is-active');
    }
  };

  const handleItemDelete = (e) => {
    e.target.closest('.listItem').style.display = 'none';
  };

  return (
    <div
      className={`listItem box ${completed ? ' has-background-success' : ''}`}
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        cursor: 'pointer',
      }}
      data-id={id}
      onClick={handleItemClick}
    >
      <input
        className={`input  ${
          !isUpdating && completed
            ? ' is-success has-background-success has-text-white'
            : isUpdating
            ? 'is-primary'
            : 'is-white has-background-white'
        }`}
        value={value}
        onChange={handleItemChange}
        disabled
        style={{ cursor: 'pointer' }}
      />
      <div className='buttons'>
        <button className='button is-light' onClick={handleItemEdit}>
          {isUpdating ? <BsFillCheckSquareFill /> : <BsPencilSquare />}
        </button>
        <button className='button is-danger' onClick={openModal}>
          <MdDelete />
        </button>
      </div>

      {/* modal */}
      <div className='modal' onClick={closeModal}>
        <div className='modal-background'></div>
        <div className='modal-content'>
          <div className='box deleteModal'>
            <p className='is-size-4 has-text-centered mb-5 '>Are you sure ?</p>
            <div
              className='buttons'
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <button className='button is-danger' onClick={handleItemDelete}>
                Yes
              </button>
              <button className='button' onClick={closeModal}>
                Cancel
              </button>
            </div>
          </div>
        </div>
        <button className='modal-close is-large' aria-label='close'></button>
      </div>
    </div>
  );
};

export default ListItem;
