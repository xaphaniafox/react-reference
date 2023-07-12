const Search = (props) => {
  const handleChange = (event) => {
    props.onSearch(event);
  };
  return (
    <div>
      <label htmlFor="search">Search</label>
      <input type="text" id="search" onChange={handleChange} />
    </div>
  );
};

export default Search;
