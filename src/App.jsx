const welcome = {
  greeting: "Hi",
  title: "React",
};
function App() {
  return (
    <>
      <h1>
        {welcome.greeting} {welcome.title}
      </h1>
      <label htmlFor="search">Search</label>
      <input type="text" id="search" />
    </>
  );
}

export default App;
