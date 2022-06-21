const todoTitle = "Work For Jannah";
const paragraph = "Salah is very important for goto jannah . it key of jannah . firstly feresta questions will salah";
 const contact = "Phone : 01867137378"
// how to make a components 
function Card(props){
   return <div className='card'>
   <h3 className='cardTitle'> {todoTitle} </h3>
   <p className='paragraph'> {paragraph} </p>
   <p className='contact'> {contact} </p>
   
</div>
}
export default Card;