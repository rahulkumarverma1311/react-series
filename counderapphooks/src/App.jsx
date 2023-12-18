
import './App.css'
import { useState } from 'react';

function App() {

  let [counter,setCounter]=useState(0)
  // let counter =15;

  const addValue = () =>{

    if(counter>=21){
      counter = 0;
      setCounter(counter)
    }else{
    counter = counter+1;
    setCounter(counter);
    }
   
    // console.log(counter);
  }
  const deleteValue = ()=>{
    if(counter <=0){
      counter = 20;
      setCounter(counter);
    }else{
    counter = counter -1;
    setCounter(counter);
    }
    // console.log(counter);
    // if(counter <=0){
    //   counter = 20;
    //   setCounter(counter);
    // }
  }

  return (
    <>
      <h1> React Hooks useState</h1>   
      <h2>Counter value:={counter}</h2>
      <button onClick={addValue}>Add Value{counter}</button>
      <br/>
      <br/>
      <button onClick={deleteValue}>Remove Value{counter}</button>
    </>
  )
}

export default App
