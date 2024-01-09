
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import NewPost from './NewPost';
import PostPage from './PostPage';
import Home from './Home';
import About from './About';
import Missing from './Missing';
 import {Route , Routes} from 'react-router-dom'
import { useEffect, useState } from 'react';
import { format } from 'date-fns';
// import api from './api/axios';
import useFetchData from './hooks/useFetchData';


function App() {
  const  title = "React JS Blog";
  const [posts , setNewPosts] = useState([])
  const  [search, setSearch] = useState('');
  const [newPostTitle , setNewPostTitle] = useState('');
  const [newPostBody, setNewPostBody] = useState('');
  const {fetchedPosts } = useFetchData('/posts');

  useEffect(()=>{
    setNewPosts(fetchedPosts);
  }
  
  ,[fetchedPosts])


  // useEffect(()=> {
  
  //      const fetchAPI = async () => {
  //           try{
  //             const response = await api.get('/posts');
  //             setNewPosts(response.data);
  //           }catch(err){
  //              if(err.response){
  //               console.log(err.response.data);
  //               console.log(err.response.status);
  //               console.log(err.response.header);
  //              }
  //              else{
  //               console.log(err.stack);
  //              }
  //           }
  //      }

  //      fetchAPI();

  // }

  //   ,[])

    const handleDelete = (id) => {
       const remainingPosts = posts.filter((post) => (post.id !== id))
       setNewPosts(remainingPosts);
       
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPostid = (posts.length) ? posts[posts.length-1].id +1 : 1;
        const date = (format(new Date(),'MMMM  dd, yyyy pp')).toString();
        const title = newPostTitle;
        const postBody = newPostBody;
        const newPost = {
          id: newPostid,
          Title: title,
          Date: date,
          Body: postBody
        }
        setNewPosts([...posts,newPost]);
        setNewPostTitle("");
        setNewPostBody("");

    }

  return (
    <div className="App">
      <Header title = {title} />
      <Nav search={search} setSearch={setSearch}/>
      <Routes>
        <Route path='/' element = {<Home posts = {posts}   />} />
        <Route path='/posts' element = {<NewPost newPostBody={newPostBody} setNewPostBody={setNewPostBody}
        newPostTitle={newPostTitle} setNewPostTitle={setNewPostTitle} handleSubmit={handleSubmit}
        />} />
        <Route path='/post/:id' element = {<PostPage posts={posts} handleDelete={handleDelete} />} />
        <Route path='/about' element = {<About/>} />
        <Route path='/missing' element = {<Missing/>} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
