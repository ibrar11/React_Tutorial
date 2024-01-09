import './App.css';
import Users from './Users';
import Posts from './Posts';
import Comments from './Comments';
import apiRequest from './apiRequest';
import { useEffect, useState } from 'react';
import Content from './Content';


function App() {

  const [content, setNewContent] = useState([]);
  const [error, setNewError] = useState(null);
  const [tab , setNewTab] = useState("USERS");
  const [check , setNewCheck] = useState(false);

   const API_URL = "https://jsonplaceholder.typicode.com";

useEffect(
  () => {

    const fetchData = async () => {
        const cont = await getUsers();
        setNewContent(cont);
        setNewCheck(true);
    }

    setTimeout(
      ()=>(async  ()=>{await fetchData();})()
      ,2000)

},[])

 const getPosts = async () =>{
  try{
    const getOption = {
      method:'GET'
    }
    const postUrl = `${API_URL}/posts`;
    const postsData = await apiRequest(postUrl,getOption);
    if(!postsData) throw Error("Did not receive expected data, check your url or reload the page");
    setNewError(null);
    return postsData;
  }catch(err){
  setNewError(err.message);
  }
 }

 const getUsers = async () =>{
  try{
    const getOption = {
      method:'GET'
    }
    const userUrl = `${API_URL}/users`;
    const usersData = await apiRequest(userUrl,getOption);
    if(!usersData) throw Error("Did not receive expected data, check your url or reload the page");
    setNewError(null);
    return usersData;
  }catch(err){
  setNewError(err.message);
  }
 }
 
 const getComments = async () =>{
  try{
    const getOption = {
      method:'GET'
    }
    const commentUrl = `${API_URL}/comments`;
    const commentsData = await apiRequest(commentUrl,getOption);
    if(!commentsData) throw Error("Did not receive expected data, check your url or reload the page");
    setNewError(null);
    return commentsData;
  }catch(err){
  setNewError(err.message);
  }
 }

 const replaceContent = async (value) => {
    try{
      const data = value === "POST" ? await getPosts() :
    value === "USERS" ? await getUsers() :
    await getComments();
    if(!data) throw Error("Did not receive expected data, check your url or reload the page");
    setNewError(null);
    setNewTab(value);
    setNewContent(data);
    }catch(err){
      setNewError(err.message);
    }
    
 }
   

  return (
    <div className="App">
      <div className='threeButtons'>
      <Users
          replaceContent = {replaceContent}
      />
      <Posts
          replaceContent = {replaceContent}
      />
      <Comments
          replaceContent = {replaceContent}
      />
      </div>
      {!error && !content.length && <p>Please wait!</p>}
      {error && <p style={{color: "red"}}>{`Error: ${error}`}</p>}
      {!error && check && <Content
        content = {content}
        tab = {tab}
      />
      }
    </div>
  );
}

export default App;
