import React from "react";
import "./SearchBar.styles.css";

const SearchBar = ({ placeholder, handleChange }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
  />
);

export default SearchBar;
