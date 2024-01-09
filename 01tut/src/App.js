
import Header from './header';
import AddItem from './AddItem';
import SearchItem from './SearchItem';
import Content from './content';
import Footer from './Footer';
import { useState , useEffect } from 'react';
import apiRequest from './apiRequest';

function App() {
  const [items , setItems] = useState([]);

  const  [newItem , setNewItem] = useState("");

  const [search , setSearch] = useState("");

  const [fetchError , setError] = useState(null);

  const [isLoading,  setIsLoading]  =  useState(true);

  const API_URL = "http://localhost:3500/items";

  useEffect(
    () => {
      
      const fetchItems = async ()=>{
            try{
              const response = await fetch(API_URL);
              if(!response.ok) throw Error("Did not receive expected data")
              const listItems = await response.json();
              setItems(listItems);
              setError(null);
            }catch (err){
               setError(err.message);
            }finally{
              setIsLoading(false);
            }
        }

        setTimeout(
          ()=>{(async () => (await fetchItems()))()}
          ,2000
        )

    }, []
  )

  const set = (listOfItems) => {
        
    setItems(listOfItems);
     
  } 

  const addNewItem = async (item) => {
    const id = items.length ? items[items.length-1].id +1  : 1;
    const itemName = item;
    const newItem = {
      id: id,
      name: itemName,
      checked: false
    };
    const updatedItemList = [...items,newItem];
    set(updatedItemList);

    const postOption = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newItem)
    }
    const result = await apiRequest(API_URL,postOption);
    if(result) setError(result);
  };

const handleCheck =async (id) => {
     const newlist = items.map(
        (item) => (
            item.id === id ? { ...item , checked: !item.checked }
            : item
        )
     );
     set(newlist);
     const itemToBeUpdated = newlist.filter(
      (item) => {
        return  item.id === id ;
      }
     );

     const patchUrl = `${API_URL}/${id}`;
    
    const patchOption = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({checked: itemToBeUpdated[0].checked})
    };

    const result  = await apiRequest(patchUrl,patchOption);
    if(result) setError(result);

};

const handleDelete = async (id) => {
    const newList = items.filter(
        (item) => {
            return (item.id !== id);
        }
    );
    set(newList);

    const deleteUrl = `${API_URL}/${id}`;

    const deleteOption = {
      method: 'DELETE',
    };
    const result = await apiRequest(deleteUrl,deleteOption);
    if(result) setError(result);
};

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(!newItem) return;

    addNewItem(newItem);

    setNewItem('');
  }


  return (
    <div className="App">
      <Header />
      <AddItem
        newItem = {newItem}
        setNewItem = {setNewItem}
        handleSubmit = {handleSubmit}
      />
      <SearchItem
        search = {search}
        setSearch = {setSearch}
      />
      <main>
      {isLoading && <p>Loading  Time...</p>}
      {fetchError && <p style={{color: "red"}}>{`Error: ${fetchError}`}</p>}
      {!fetchError &&  !isLoading &&<Content 
         items = {
          items.filter(
            (item) =>  (
              (item.name).toLowerCase().includes(search.toLowerCase())
            )
          )
         }
         handleCheck = {handleCheck}
         handleDelete= {handleDelete}
      />}
      </main>
      
      <Footer 
          length = {items.length}
      />
    </div>
  );
}

export default App;
