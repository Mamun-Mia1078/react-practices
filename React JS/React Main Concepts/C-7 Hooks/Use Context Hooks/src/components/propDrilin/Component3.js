import React,{useContext} from 'react'

import { UserContext } from '../../UserContext'

const Component3 = () => {
  const {user, text} = useContext(UserContext)
  console.log(user);
  return (
    <div>
        <h1> {user.id} , {user.name} </h1>
         {/* <h1> {user.name} </h1> */}
         <h2> {text} </h2>

    </div>
  )
}

export default Component3