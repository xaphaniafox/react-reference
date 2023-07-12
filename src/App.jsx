const welcome = {
  greeting: "Hi",
  title: "React",
};

function App() {
  const stories = [
    {
      id: 0,
      title: "React",
      url: "https://reactjs.org",
      author: "Reza Ahmadi",
      num_comments: 3,
      points: 4,
    },
    {
      id: 1,
      title: "Readux",
      url: "https://redux.js.org",
      author: "Mohammad Kia",
      num_comments: 2,
      points: 5,
    },
  ];
  return (
    <>
      <h1>
        {welcome.greeting} {welcome.title}
      </h1>
      <Search />
      <List list={stories} />
    </>
  );
}

const handleChange = (event) => {
  console.log(event.target.value);
};

const Search = () => {
  return (
    <div>
      <label htmlFor="search">Search</label>
      <input type="text" id="search" onChange={handleChange} />
    </div>
  );
};

const List = (props) => {
  return (
    <ul>
      {props.list.map((user) => (
        <Item key={user.id} item={user} />
      ))}
    </ul>
  );
};

const Item = (props) => {
  return (
    <li>
      <span>
        <a href={props.item.url}>{props.item.title}</a>
      </span>
      <span>{props.item.author}</span>
      <span>{props.item.num_comments}</span>
      <span>{props.item.points}</span>
    </li>
  );
};
export default App;
