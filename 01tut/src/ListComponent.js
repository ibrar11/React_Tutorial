import React from 'react'
import LineComp from './LineComp'


const ListComponent = ({items, handleCheck, handleDelete}) => {
  return (
    <ul>
            { 
                 items.map ((item) => (
                    <LineComp
                       key={item.id}
                       item={item}
                       handleCheck={handleCheck}
                       handleDelete={handleDelete}
                      />
                 ))
            }
         </ul>
  )
}

export default ListComponent
