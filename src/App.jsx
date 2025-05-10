import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  let name = "Giorgi"
  let lastname = "Sanadiradze"
  let age = 16
  let hobby = "Coding & Gaming"

  return (
    <div className='x1'>
      <h1>Name:  <span style={{fontWeight:"10"}}>{name}</span></h1>
      <h1>Last Name:   <span style={{fontWeight:"10"}}>{lastname}</span></h1>
      <h1>Age:   <span style={{fontWeight:"10"}}>{age}</span></h1>
      <h1>Hobby:   <span style={{fontWeight:"10"}}>{hobby}</span></h1>
    </div>
  )
}

export default App
