import React from 'react'
import './Search.css'


const Search = (props) => {
  return (
    <form className='search-from' onSubmit={(e) => props.onSubmit(e)}>
      <input
        className='search-input'
        type="text"
        value={props.value}
        placeholder='Search'
        onChange={(e) => props.onChange(e)}
        name='Search'
        autoFocus
      />
   </form>
  );
};

export default Search;