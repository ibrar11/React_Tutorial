import React from 'react'

const Users = ({replaceContent}) => {
  return (
    <div className='usersTab'>
      <button onClick={()=>replaceContent("USERS")}>
         Users
      </button>
    </div>
  )
}

export default Users