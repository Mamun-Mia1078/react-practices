import React, {useState} from 'react'

import Component2 from "./Component2";

const Component1 = () => {
    const [user, setUser] = useState({
        id : 1078, name: "Muzammel Hoque Mamun "
    });
   
  return (
    <div>
        <Component2 user = {user} />
    </div>
  )
}

export default Component1