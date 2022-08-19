import React, {useRef} from 'react'

const UserFrom = () => {
    const userNameRef = useRef();
    const userPass = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const Name = userNameRef.current.value;
        const pass = userPass.current.value;

        console.log({Name, pass});
    }
  return (
   <from onSubmit={handleSubmit} >
    <div>
        <label htmlFor='userName' >UserName:</label>
        <input type="text" id ="userName" ref={userNameRef} />
    </div>
    <div>
        <label htmlFor='userName' >Password:</label>
        <input type="password" id ="password" ref={userPass} />
    </div>

    <button>Register</button>
   </from>
  )
}

export default UserFrom