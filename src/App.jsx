import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { About } from './component/About'
import { Routes, Route, Link } from 'react-router-dom'
import { Home } from './component/Home'
import { NavBar } from './component/nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>

  )
}

export default App
