import { useEffect, useReducer, useState } from "react";
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
  const storiesReducer = (state, action) => {
    switch (action.type) {
      case "SET_STORIES":
        return action.payload;
      case "REMOVE_STORY":
        return state.filter((story) => story.id !== action.payload);
      default:
        return state;
    }
  };

  const [stories, dispatchStories] = useReducer(storiesReducer, []);
  // const [stories, setStories] = useState([]);
  const [searchTerm, setSearchTerm] = useStorageState("search", "");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getAsyncStories = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ data: { stories: initialStories } });
      }, 2000);
    });

  useEffect(() => {
    setIsLoading(true);
    getAsyncStories()
      .then((result) => {
        dispatchStories({ type: "SET_STORIES", payload: result.data.stories });
        // setStories(result.data.stories);
        setIsLoading(false);
      })
      .catch(() => setIsError(true));
  }, []);

  const handleRemoveStory = (id) => {
    dispatchStories({ type: "REMOVE_STORY", payload: id });
    // dispatchStories({type: "SET_STORIES", payload: newStories});
    // setStories(newStories);
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
      {isError && <p>Something went wrong.</p>}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <List list={searchedStories} onRemoveItem={handleRemoveStory} />
      )}
    </>
  );
}
export default App;
