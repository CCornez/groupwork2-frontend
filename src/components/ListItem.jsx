import { MdDelete } from 'react-icons/md';
import { BsPencilSquare } from 'react-icons/bs';

const ListItem = () => {
  return (
    <div
      class='box'
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <p>ListItem</p>
      <div class='buttons'>
        <button class='button is-light'>
          <BsPencilSquare />
        </button>
        <button class='button is-danger'>
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

export default ListItem;
