const Search = (props) => {
  const handleChange = (event) => {
    props.onSearch(event);
  };
  return (
    <>
      <label htmlFor="search">Search</label>
      <input
        type="text"
        id="search"
        value={props.search}
        onChange={handleChange}
      />
    </>
  );
};

export default Search;
