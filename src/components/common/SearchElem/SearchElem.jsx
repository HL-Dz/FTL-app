import React, { useState } from 'react';
import "./SearchElem.scss";

const SearchElem = ({search, setSearch}) => {
  const [isActive, setIsActive] = useState(false);

  const showForm = () => {
    setIsActive(true);
  }

  const closeForm = () => {
    setIsActive(false);
    setSearch('');
  }

  const changeSearchElem = (e) => {
    setSearch(e.target.value);
  }

  return (
    <>
      <span className="search-icon" onClick={showForm}>
        <i className="fas fa-search"></i>
      </span>
      <form onSubmit={(e) => {e.preventDefault()}} className={isActive ? "search-form search-form_visible" : "search-form"}>
        <input 
          className="search-input" 
          value={search} 
          placeholder="Search..." 
          type="text" 
          onChange={changeSearchElem}
        />
        <span className="search-form-close" onClick={closeForm}>
          <i className="fas fa-times"></i>
        </span>
      </form>
    </>
  )
}

export default SearchElem;