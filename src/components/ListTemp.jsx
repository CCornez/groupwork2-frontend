import { useState } from 'react';
import ListItem from './ListItem';

const ListTemp = () => {
  const [listItems, setListItems] = useState([
    {
      id: 1,
      todo_lists_id: 1,
      title: 'test',
      is_completed: 0,
    },
    {
      id: 2,
      todo_lists_id: 1,
      title: 'alo',
      is_completed: 1,
    },
    {
      id: 3,
      todo_lists_id: 2,
      title:
        'testing with a longer phrase as to see how it is going to look like on the html page',
      is_completed: 0,
    },
  ]);

  return (
    <>
      {listItems.map((listItem) => (
        <ListItem
          key={listItem.id}
          listItem={listItem}
          //   handleItemClick={handleItemClick}
        />
      ))}
    </>
  );
};

export default ListTemp;
