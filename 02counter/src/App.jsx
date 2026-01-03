import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let[counter,setCounter]=useState(5) //useState gives 2 things in the form of an array.
  //  so we have written array[counter,setCounter] this array generally wound be in the form of[variable,function which controlls that variable]
  //let counter=5
  const addValue = () =>{
    //counter=counter+1
    if(counter>=20)
    {
       return;
    }
    else{
      setCounter(counter+1)
      console.log("Clicked",counter)
    }
    

  }
  const decValue = () =>{
    if(counter<=0)
    {return}
    else{
      setCounter(counter-1)
      console.log("Clicked for decreasing",counter)
    }
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>counter value : {counter}</h2>
      <button
      onClick={addValue}
      >Increase value {counter}</button>
      <br></br>
      <button
      onClick={decValue}
      >Decrease value {counter}</button>
    </>
  )
}                          

export default App