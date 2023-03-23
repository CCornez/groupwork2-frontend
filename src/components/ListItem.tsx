import React, {
  useState,
  useEffect,
  MouseEvent,
  ChangeEvent,
  MouseEventHandler,
  ChangeEventHandler,
} from 'react';
import { MdDelete } from 'react-icons/md';
import { BsPencilSquare, BsFillCheckSquareFill } from 'react-icons/bs';
import fetcher from '../js/fetcher';

const ListItem = (props: any) => {
  /**
   * Variables
   */

  // interface
  interface Item {
    id: number;
    todo_lists_id: number;
    title: string;
    is_completed: string;
  }

  // props
  const { id, title, todo_lists_id, is_completed }: Item = props.listItem;

  // states
  const [value, setValue] = useState(title);
  const [completed, setCompleted] = useState(is_completed !== '0');
  const [isUpdating, setIsUpdating] = useState(false);
  const [isModal, setIsModal] = useState(false);

  /**
   * Events
   */

  const handleItemClick: MouseEventHandler<HTMLDivElement> = (
    e: MouseEvent<HTMLDivElement> & { target: Element }
  ) => {
    // TODO: update complete in db
    const id = e.currentTarget.dataset.id;

    // check if user is changing a list item and if the modal is open
    // check if clicking on the box
    if (
      !isUpdating &&
      !isModal &&
      (e.target.classList.contains('box') || e.target.nodeName === 'INPUT')
    ) {
      // patch
      (async () => {
        const { data } = await fetcher.patch(`/todo/${id}`, {
          is_completed: completed ? 0 : 1,
        });

        // check fetch successful
        if (data.status === 'success') {
          setCompleted((prevState) => !prevState);
        }
      })();
    }
  };

  const handleItemEdit: MouseEventHandler<HTMLButtonElement> = (
    e: MouseEvent<HTMLButtonElement> & { target: Element }
  ) => {
    const inputRef = e.target
      .closest('.box')
      ?.querySelector('.input') as HTMLInputElement;
    if (!isUpdating) {
      setIsUpdating(true);
      if (inputRef) {
        inputRef.disabled = false;
      }
    } else {
      // patch
      (async () => {
        const { data } = await fetcher.patch(`/todo/${id}`, {
          title: value,
        });

        // check fetch successful
        if (data.status === 'success') {
          setIsUpdating(false);
          if (inputRef) {
            inputRef.disabled = true;
          }
        }
      })();
    }
  };

  const handleItemChange: ChangeEventHandler<HTMLInputElement> = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setValue(e.currentTarget.value);
  };

  const openModal: MouseEventHandler<HTMLButtonElement> = (
    e: MouseEvent<HTMLButtonElement> & { target: Element }
  ) => {
    setIsModal(true);
    e.target
      .closest('.listItem')
      ?.querySelector('.modal')
      ?.classList.add('is-active');
  };

  const closeModal: MouseEventHandler<HTMLButtonElement | HTMLDivElement> = (
    e: MouseEvent<HTMLButtonElement | HTMLDivElement> & { target: Element }
  ) => {
    // close if clicked outside of modal or on cancel button
    if (
      !e.target.closest('.deleteModal') ||
      (e.currentTarget as HTMLButtonElement).classList.contains('button')
    ) {
      setIsModal(false);
      e.target
        .closest('.listItem')
        ?.querySelector('.modal')
        ?.classList.remove('is-active');
    }
  };

  const handleItemDelete: MouseEventHandler<HTMLButtonElement> = (
    e: MouseEvent<HTMLButtonElement> & {
      target: Element;
    }
  ) => {
    // patch
    (async () => {
      const { data } = await fetcher.patch(`/todo/${id}`, {
        is_visible: 0,
      });

      // check fetch successful
      if (data.status === 'success') {
        (e.target.closest('.listItem') as HTMLElement).style.display = 'none';
      }
    })();
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
