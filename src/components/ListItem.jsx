import { MdDelete } from 'react-icons/md';

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
        <button class='button is-danger'>
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

export default ListItem;
