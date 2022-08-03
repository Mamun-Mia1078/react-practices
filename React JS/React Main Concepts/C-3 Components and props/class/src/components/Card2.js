import React, {component} from "react";

class Card2 extends component{
    render(){
        return(
            // <h3>Hello i am from Card2 </h3>
            <h3> {this.props.name} </h3>
        )
    }
}
export default Card2