import React,{ useState } from 'react';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';

function App() {

  const [ack,setack]=useState(true);

const change=()=>{
  setack(!ack);   
}

  return (
    <>
    {/* <h1>Hello world!</h1> */}
      {/* <Home />
      <Counter /> */}
      {/* <h1>{name}</h1> */}

{ack ?<Home/> :<About/>}

      <button onClick={change}>change</button>
    </>
  );
}

export default App;