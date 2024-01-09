import React from 'react'

const Content = ({content  , tab}) => {

    console.log(Object.keys(content[0]));

  return (
    
    <ul className='content'>
       <h1>{tab}</h1>
       {
        content.map(
            (item) =>  (
                <li key={item.id}>{JSON.stringify(item)}</li>
            )
        )
       }
    </ul>
  )
}

export default Content
