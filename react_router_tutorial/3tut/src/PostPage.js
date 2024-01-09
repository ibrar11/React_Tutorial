import React from 'react'
import { useParams , Link } from 'react-router-dom'

const PostPage = ({posts , handleDelete}) => {
  const { id }  = useParams();
  const post = posts.find((post) => {
    return (post.id).toString() === id;
  })
  
  return (
    <main className='PostPage'>
      <article className='post'>
         {post &&
         <> 
           <h2>{post.Title}</h2>
           <p className='postDate'>{post.Date}</p>
           <p className='postBody'>{post.Body}</p>
           <button onClick={()=>handleDelete(post.id)}>
             Delete Post
           </button>
         </>
         }
         {!post &&
         <>
           <p>Sorry! no post found to display.</p>
           <p>
            <Link to = {"/"}>Go to home</Link>
           </p>
         </>
         }
      </article>
    </main>
  )
}

export default PostPage
