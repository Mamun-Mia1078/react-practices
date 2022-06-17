const domContainer = document.querySelector('#root');

// const myElement = React.createElement("div",null,[
//     React.createElement("p",null, "Bismillahir Rahmanir Rahim "),
//     React.createElement("p",null, "Assalamualaikum "),

// ]);
const Increment =() => {
    const [counter,setCounter] = React.useState(0);
    return (
        <div>
        <h1 id="display">{counter}</h1>
        <button id="button" onClick={ () => setCounter(counter +1) }>Increment ++</button>
    </div>
    );
   

};
ReactDOM.render(
   <div className = "container">
    <Increment/>
    <Increment/>
    <Increment/>
    <Increment/>
    <Increment/>
    <Increment/>

    
   </div>,
   domContainer
);
// ReactDOM.render(<Increment />,domContainer);