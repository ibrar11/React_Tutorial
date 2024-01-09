import React from 'react'

const SquareBox = ({newColor}) => {
  return (
    <div className='squareBox'>
        <p className='insideText' style={{backgroundColor: newColor}}>
            {newColor ? newColor : "Empty Value"}
        </p>
    </div>
  )
}

export default SquareBox
