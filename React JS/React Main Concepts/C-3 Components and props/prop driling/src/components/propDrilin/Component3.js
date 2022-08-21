import React from 'react'
import userEvent from '@testing-library/user-event'

const Component3 = ({user}) => {
  return (
    <div>
        <h1> {user.id} , {user.name} </h1>
         {/* <h1> {user.name} </h1> */}

    </div>
  )
}

export default Component3