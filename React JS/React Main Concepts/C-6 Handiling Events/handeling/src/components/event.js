import React, { Component } from 'react'

class Event extends Component {

constructor(props) {
  super(props)

  this.state = {
     changeableValue : ''
  }
}
    
    handleChanging = (e) => {
    //    console.log(e.target.value);
    this.setState({
        changeableValue: e.target.value
    }, () => {
        console.log(this.state.changeableValue);
    } )
    }

  render() {
    return (
      <div>
        <input type= "text" onChange={this.handleChanging}/>
        <p> {this.state.changeableValue} </p>
         </div>
    )
  }
}
export default Event