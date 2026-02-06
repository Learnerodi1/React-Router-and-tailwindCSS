import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { About } from './component/About'
import { Routes, Route, Link } from 'react-router-dom'
import { Home } from './component/Home'
import { NavBar } from './component/nav'
import { VansPage } from './component/pages/VansPage.jsx'
import "./server.js"
import { VanDescriptionPage } from './component/pages/vanPage.jsx'
import { HostNav } from './component/hostpages/hostnav.jsx'
import { HostPage } from './component/hostpages/hostpage.jsx'
import { HostLayout } from './component/hostpages/hostlayout.jsx'
import { HostReviewPage } from './component/hostpages/hostReviewPage.jsx'
import { HostIncomePage } from './component/hostpages/hostIncome.jsx'
import { HostVanPage } from './component/hostpages/hostVanPage.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Routes>
        <Route path='/' element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='/vans'>
            <Route index element={<VansPage />} />
            <Route path=':id' element={<VanDescriptionPage />} />
          </Route>

          <Route path='/host' element={<HostLayout />} >
            <Route index element={<HostPage />} />
            <Route path='review' element={<HostReviewPage />} />
            <Route path='income' element={<HostIncomePage />} />
            <Route path='vans' element={<HostVanPage />} />
          </Route>
        </Route>
      </Routes>
      {/* <HostNav/> */}
    </>

  )
}

export default App
