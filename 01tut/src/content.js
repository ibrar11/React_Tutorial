import React from 'react'
import ListComponent from './ListComponent';

const Content = ({items, handleCheck, handleDelete}) => {
    


  return (
    <>
        {items.length ? ( 
            <ListComponent 
               items={items}
               handleCheck={handleCheck}
               handleDelete={handleDelete}
            />
        ) : (
            <p style={{marginTop: '2rem'}}>Your list is empty</p>
        )
            
       
        }
    </>
  )
}

export default Content;
