import { useEffect, useState } from 'react';
import ListItem from './ListItem';
import fetcher from '../js/fetcher';

const ListTemp = () => {
  const [listItems, setListItems] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await fetcher('/todos');
        setListItems(data.todos);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <>
      {listItems.map((listItem) => (
        <ListItem key={listItem.id} listItem={listItem} />
      ))}
    </>
  );
};

export default ListTemp;
