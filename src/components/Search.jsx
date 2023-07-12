import { useState } from "react";
const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <div>
      <label htmlFor="search">Search</label>
      <input type="text" id="search" onChange={handleChange} />
      <p>{searchTerm}</p>
    </div>
  );
};

export default Search;
