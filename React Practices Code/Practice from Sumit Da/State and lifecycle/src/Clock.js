import React from 'react';

class Clock extends React.Component {
    state = {date: new Date() };
    
    componentDidMount() {
        setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount(){
        clearInterval(this.clocktimer);
    }
    tick() {
        this.setState({
            date: new Date(),
        });
    }
    
    render() {
          return(
            <h1 className='heading'>
              <span className='text'>{this.state.date.toLocaleTimeString(this.props.locale)}
              </span>
              
            </h1>
          );
  
        
    }
   
  }
  export default Clock; 