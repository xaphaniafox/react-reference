const Search = () => {
  const handleChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <div>
      <label htmlFor="search">Search</label>
      <input type="text" id="search" onChange={handleChange} />
    </div>
  );
};

export default Search;
