import React, {useState} from 'react'

import Component2 from "./Component2";
import { UserContext } from '../../UserContext';

const Component1 = () => {
    const [user, setUser] = useState({
        id : 1078, name: "Muzammel Hoque Mamun "
    });

    const [text, setText] = useState("Hello i am text");
   
  return (
    <div>
        <UserContext.Provider value={{user,text}} > 
        <Component2 user = {user} />
        </UserContext.Provider>
    </div>
  )
}

export default Component1