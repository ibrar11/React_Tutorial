import React from 'react'

const SearchItem = ({search , setSearch}) => {
  return (
    <form  className='searchForm' onSubmit={(e)=>(e.preventDefault())}>
        <label htmlFor="searchItem">Search Item</label>
        <input   autoFocus
                 type="text"
                 id="searchItem"
                 placeholder='Search Item'
                 required
                 value = {search}
                  onChange = {(e)=>{setSearch(e.target.value)}}
                 />
    </form>
  )
}

export default SearchItem
