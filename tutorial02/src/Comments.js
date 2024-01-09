import React from 'react'

const Comments = ({replaceContent}) => {
  return (
    <div className='commentsTab'>
      <button onClick={()=>replaceContent("COMMENT")}>
         Comments
      </button>
    </div>
  )
}

export default Comments
