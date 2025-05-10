import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  let name = "giorgi"
  let lastname = "sanadiradze"
  let age = 16
  let hobby = "coding"

  return (
    <div className='x1'>
      <h1>name:  {name}</h1>
      <h1>lastname:  {lastname}</h1>
      <h1>age:  {age}</h1>
      <h1>hobby:  {hobby}</h1>
    </div>
  )
}

export default App
