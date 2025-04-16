import React from 'react'
import "./Search.scss"

const Search = () => {
  return (
    <div className="searchbar-wrapper">
      <input
        type="text"
        placeholder="Search for jewelry, categories, or collections..."
        className="search-input"
      />
    
    </div>
  )
}

export default Search
