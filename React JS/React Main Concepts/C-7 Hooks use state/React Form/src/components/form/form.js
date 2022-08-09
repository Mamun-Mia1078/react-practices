import React, { useState } from 'react'

import style from './form.module.css'

export default function Form() {

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [pass, setPass] = useState("");

const handleName = (e) => {
    setName(e.target.value);
};
const handleEmail = (e) => {
    setEmail(e.target.value);
};
const handlePass = (e) => {
    setPass(e.target.value);
};

const handleSubmit = (e) => {
   console.log(name, email, pass);
   e.preventDefault();
    
    };
  
  

    
  return (
    <div>
        <h1>Registration Form</h1>
        <from onSubmit = {handleSubmit}>
            <div className={style.forms}>
            <label htmlFor="name">Name: </label>
            <input 
            type = "text"
             name="name " 
             id="name"
             value={name}
              onChange={handleName} required />
            </div>
            
           <div className={style.forms}>
           <label htmlFor="email">Email: </label>
            <input type = "email" name="email " id="email"
            value={email} onChange={handleEmail} required />
            
           </div>
           <div className={style.forms}>
           <label htmlFor="pass">Password: </label>
            <input type = "pass" name="pass" id="pass" 
            value={pass} onChange={handlePass} required />
            
           </div>
           <div>
            <button type="submit" > Submit</button>
           </div>
        </from>
    </div>
  )
}

