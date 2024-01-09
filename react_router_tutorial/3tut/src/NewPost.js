import React from 'react'

const NewPost = ({newPostBody,setNewPostBody,newPostTitle,setNewPostTitle,handleSubmit}) => {
  return (
    <main className='NewPost'>
      <h2>New Post</h2>
      <form className='newPostForm' onSubmit={handleSubmit}>
       <label htmlFor="postTitle">Set Post Title</label>
       <input 
        type="text"
        id="postTitle"
        placeholder='Set Post Tile'
        required 
        value={newPostTitle}
        onChange={(e)=>(setNewPostTitle(e.target.value))}
        />
         <label htmlFor="postBody">Set Post Body</label>
         <textarea
          type="text"
          id="postBody"
          placeholder='Set Post Body'
          required 
          value={newPostBody}
          onChange={(e)=>(setNewPostBody(e.target.value))}
        />
        <button type='sybmit'>
           Submit 
        </button>
    </form>
    </main>
  )
}

export default NewPost
