import React, { useRef } from 'react'
import { FaPlus } from 'react-icons/fa'

const ColorForm = ({color , setColor, handleSubmit}) => {
    const inputRef = useRef();
  return (
    <form  className='addForm' onSubmit={handleSubmit}>
        <label htmlFor="addColor"></label>
        <input   autoFocus
                 ref={inputRef}
                 type="text"
                 id="addColor"
                 placeholder='Add Color'
                 required
                 value = {color}
                 onChange={(e)=>(setColor(e.target.value))}
                 />
        <button 
                type='submit'
                aria-label='Add Item'
                onClick={()=> inputRef.current.focus()}
                >
            <FaPlus  />
        </button>
   </form>

  )
}

export default ColorForm
