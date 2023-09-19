import React from "react";

function Search({setSearchPlants}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input onChange={(e) => setSearchPlants(e.target.value)}
        type="text"
        id="search"
        placeholder="Type a name to search..."
        // onChange={(e) => console.log("Searching...")}
      />
    </div>
  );
}

export default Search;
