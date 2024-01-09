import React from 'react'

const Posts = ({replaceContent}) => {
    
  return (
    <main className='postsTab'>
      <button onClick={()=>replaceContent("POST")}>
         Posts
      </button> 
    </main>
    
  )
}

export default Posts
