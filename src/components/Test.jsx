import axios from 'axios';

const Test = () => {
  const fetch = async () => {
    const data = await axios('https://s13.syntradeveloper.be/api/v1/todos');

    console.log(data);
  };
  const post = async () => {
    const data = await axios.post(
      'https://s13.syntradeveloper.be/api/v1/todo',
      { todo_lists_id: '1', title: 'TESTING post' }
    );

    console.log(data);
  };

  return (
    <>
      <button onClick={fetch}>Fetch todos</button>{' '}
      <button onClick={post}>
        Post todos "todo_lists_id": "1", "title": "TESTING post"
      </button>
    </>
  );
};

export default Test;
