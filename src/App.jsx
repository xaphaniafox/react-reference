const welcome = {
  greeting: "Hi",
  title: "React",
};

const list = [
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

function App() {
  return (
    <>
      <h1>
        {welcome.greeting} {welcome.title}
      </h1>
      <Search />
      <List />
    </>
  );
}

const Search = () => {
  return (
    <div>
      <label htmlFor="search">Search</label>
      <input type="text" id="search" />
    </div>
  );
};

const List = () => {
  return (
    <ul>
      {list.map((user) => (
        <li key={user.id}>
          <span>
            <a href={user.url}>{user.title}</a>
          </span>
          <span>{user.author}</span>
          <span>{user.num_comments}</span>
          <span>{user.points}</span>
        </li>
      ))}
    </ul>
  );
};

export default App;
