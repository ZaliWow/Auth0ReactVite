import { useEffect, useState } from 'react'
import { Login } from './pages/Login'
import { Navbar } from './components/Navbar'
import { useAuth0 } from '@auth0/auth0-react'
import { Products } from './components/Products'
import { Home } from './pages/Home'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { Footer } from './components/Footer'

function App() {

  const [loged, setLoged]= useState(false)
  const {isAuthenticated}= useAuth0()
  const navigate = useNavigate()
  

  return ( 
    <>
      {isAuthenticated ? <Navbar></Navbar>  : ""}
    
  <Routes> 
    <Route path='/' element={<Home></Home>}></Route>
    <Route path='/login' element={<Login ></Login>}></Route>
  </Routes>
  {isAuthenticated ? <Footer></Footer>  : ""}
    </>
  )
}

export default App
