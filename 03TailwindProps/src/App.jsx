import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className= 'bg-green-800 text-white p-4 rounded-xl mb-4'>Tailwand Test</h1>
    <Card />
    <Card username='Any' btnText="Visit Any's Profile"
    imageSrc="https://images.pexels.com/photos/27401681/pexels-photo-27401681/free-photo-of-a-woman-in-black-jacket-and-sunglasses-standing-on-a-street.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>
    <Card username='Ali' btnText="Visit Ali's Profile"
    imageSrc="https://images.pexels.com/photos/5750777/pexels-photo-5750777.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>
    </>
  )
}

export default App
