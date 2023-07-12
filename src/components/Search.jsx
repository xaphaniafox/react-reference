const Search = (props) => {
  const handleChange = (event) => {
    props.onSearch(event);
  };
  return (
    <div>
      <label htmlFor="search">Search</label>
      <input
        type="text"
        id="search"
        value={props.search}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
