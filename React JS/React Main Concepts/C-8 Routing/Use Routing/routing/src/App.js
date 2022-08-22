import './App.css';

import {BrowserRouter, Route, Routes} from "react-router-dom"

import Blog from "./Pages/Blog.js"
import Contact from "./Pages/Contact.js"
import Eror from './Pages/Eror.js';
import Home from "./Pages/Home.js"

function App() {
  return (
    
    
    
   <BrowserRouter>
         <a href='/'>Home
          
         </a>
   <Routes>
    <Route path='/home' element={<Home/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/blog' element={<Blog/>} />
    <Route path='*' element={<Eror/>} />


   </Routes>
   </BrowserRouter>
  
  );
}
// home => 
// contact => contact
export default App;
