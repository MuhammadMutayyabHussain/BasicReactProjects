import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
  const addValue = () => {
    if (counter === 20) { }
    else {
      setCounter(prevCounter=>prevCounter+1);
      setCounter(prevCounter=>prevCounter+1);
      setCounter(prevCounter=>prevCounter+1);
    }
  }
  const removeValue = () => {
    if (counter === 0) { }
    else{
      setCounter(counter-1);
    }
  }
  return (
    <>
    <h1>Hooks Concept in REACT</h1>
    <h1>Counter Value: {counter}</h1>
    <button
    onClick={addValue}>Add Value</button>
    <button
    onClick={removeValue}>Subtract Value</button>
    </>
  )
}

export default App
