import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 let [counter,setCounter]=useState(15);
const addValue=()=> {
  if(counter>=20){
    return 
  }
  else{
    counter =counter+1;
  }
    
    setCounter(counter);
     

    }

    const removeValue=()=>{
      if(counter<=0){
        return
      }
      else{
        counter=counter-1;
      }
      setCounter(counter);
    }
    
  return (
    <>
      <h1>Chai aur Vishal</h1>
      <h2>{counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <br />
      <footer>footer: {counter}</footer>
    </>
  )
}

export default App
