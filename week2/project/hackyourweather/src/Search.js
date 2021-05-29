import React from "react";

function Search(props) {
  return (
    <div>
      <input
        type="text"
        onChange={(e) => props.setSearchTerm(e.target.value)}
      />
      <button onClick={() => props.setSearchBtn(props.searchTerm)}>
        Search
      </button>
    </div>
  );
}

export default Search;
