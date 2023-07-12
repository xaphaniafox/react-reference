import Search from "./components/Search";
import List from "./components/List";

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
export default App;
