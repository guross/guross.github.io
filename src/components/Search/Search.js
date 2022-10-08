import React from "react";
import {} from "./SearchModule.scss";

const Search = ({ setSearch, setPageNumber }) => {
  return (
    <form className="d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5">
      <input
        onChange={(e) => {
          setPageNumber(1);
          setSearch(e.target.value);
        }}
        type="text"
        placeholder="Seach for Character"
        className="input"
      />
      <button onClick={e=>{e.preventDefault();}} className="btn btn-primary">Search</button>
    </form>
  );
};

export default Search;
