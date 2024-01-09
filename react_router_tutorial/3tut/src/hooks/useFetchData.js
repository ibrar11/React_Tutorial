import { useState , useEffect } from "react";
import api from '../api/axios'

const useFetchData = (endPoint) => {

    const [fetchedPosts,setPosts]  = useState([]);
    const [error , setError] = useState(null);

     useEffect(
        ()=> {
          const fetchData  = async (endP) => {
              try{
                const response = await api.get(endP);
                setPosts(response.data);
              }catch(err){
                 setError(err);
              }
          }

          fetchData(endPoint);
        }
      ,[endPoint])

      return  {fetchedPosts ,  error};

}


export default useFetchData;