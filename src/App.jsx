import { useEffect, useState } from "react";
import InputWithLabel from "./components/InputWithLabel";
import List from "./components/List";
import useStorageState from "./hooks/useStorageState";

const welcome = {
  greeting: "Hi",
  title: "React",
};

function App() {
  const initialStories = [
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
      title: "Redux",
      url: "https://redux.js.org",
      author: "Mohammad Kia",
      num_comments: 2,
      points: 5,
    },
  ];

  const [stories, setStories] = useState([]);
  const [searchTerm, setSearchTerm] = useStorageState("search", "");

  const getAsyncStories = () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: { stories: initialStories } });
      }, 2000);
    });

  useEffect(() => {
    getAsyncStories().then((result) => {
      setStories(result.data.stories);
    });
  }, []);

  const handleRemoveStory = (id) => {
    const newStories = stories.filter((story) => story.id !== id);
    setStories(newStories);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchedStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <h1>
        {welcome.greeting} {welcome.title}
      </h1>
      <InputWithLabel
        id="search"
        label="Search"
        value={searchTerm}
        onInputChange={handleSearch}
      />
      <List list={searchedStories} onRemoveItem={handleRemoveStory} />
    </>
  );
}
export default App;
