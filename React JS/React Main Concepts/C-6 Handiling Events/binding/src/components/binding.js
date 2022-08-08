import React, { Component } from 'react'

class Binding extends Component {
constructor(props) {
  super(props)

  this.state = {
    
    count : 0
  }
//   this.handleB = this.handleB.bind(this)

}

handleB = () => {
    this.setState({
        count: this.state.count + 1
        
    })
    // console.log(this.state.count);
}
 
  render() {
    return (
      <div>
        <h1> {this.state.count} </h1>
        <button onClick={this.handleB} >Increase Button</button>
      </div>
    )
  }
}
export default Binding;