import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Error from './final/pages/Error';


function App() {
  return (
<>
    
    
    <BrowserRouter>

    <nav>
      <ul>
        <li><Link to='/logout'>HOME</Link></li>
       <li><Link to='/'> About </Link></li>
      </ul>
    </nav>


      <Routes>

        <Route path='/' element = {<h1>we are at home page</h1>} />

        <Route path='*' element = {<Error/>} />


       <Route path ='/logout:id' element = {<h1>you have logged out !!</h1>}/>

      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
