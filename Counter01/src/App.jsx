import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let[counter,setCounter]=useState(0)
   const addValue =() =>{
   setCounter(counter+1)
   if(counter ===20){
    alert("Counter cannot be greater than 20")
    setCounter(20)
   }
  }
   const removeValue =()=>
    {
    setCounter(counter-1);
    if(counter ===0){
      alert("Counter cannot be less than 0")
      setCounter(0)
    }
    
    }

  return (
    <>
     <h1>Chai Aur React</h1>
     <h2>Counter Value:{counter}</h2>

     <button
     onClick={addValue}>Add Value {counter}</button>
     <br />     
     <button onClick={removeValue}>Remove Value {counter}</button>
     <p>footer:{counter}</p>
         </>
  )
}

export default App
