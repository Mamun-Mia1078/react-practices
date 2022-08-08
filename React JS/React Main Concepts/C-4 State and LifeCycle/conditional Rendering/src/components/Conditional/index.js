import './style.css'

import React, { Component } from 'react'

import Home from './Home.js'
import Sign from './Sign.js'

class Conditional extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : false
        }
    }
   
    
    render() {

        const {isLoggedIn} = this.state
        let element;

       
      element =  isLoggedIn ? <Home/> : <Sign/>
      return (
          <div>
              {element}
              
          </div>
      )
    }
}

export default Conditional