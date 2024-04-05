import React from 'react'
import './SearchInput.css'

const SearchInput = () => {
  return (
    <div className='search-input'>
      <input type="text" placeholder='Search for friend' />
      <div className="search-btn">
        Search
      </div>
    </div>
  )
}

export default SearchInput