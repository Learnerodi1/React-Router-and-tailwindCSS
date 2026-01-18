import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { About } from './component/About'
import { Routes, Route, Link } from 'react-router-dom'
import { Home } from './component/Home'
import { NavBar } from './component/nav'
import { VansPage } from './component/pages/Vans.Page'
import "./server.js"
import { VanDescriptionPage } from './component/pages/vanPage.jsx'
import { HostNav } from './component/hostpages/hostnav.jsx'
import { HostPage } from './component/hostpages/hostpage.jsx'
import { HostLayout } from './component/hostpages/hostlayout.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Routes>
        <Route element={<NavBar />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/vans' element={<VansPage />} />
          <Route path='/vans' element={<VansPage />} />
          <Route path='/vans/:id' element={<VanDescriptionPage />} />
          <Route element={<HostLayout/>} >
            <Route path='/host' element={<HostPage />} />
          </Route>
        </Route>
      </Routes>
      {/* <HostNav/> */}
    </>

  )
}

export default App
