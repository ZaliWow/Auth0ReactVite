import { useEffect, useState } from 'react'
import { Login } from './pages/Login'
import { Navbar } from './components/componentsGlobal/Navbar'
import { useAuth0 } from '@auth0/auth0-react'
import { Home } from './pages/Home'
import { Routes, Route, useNavigate } from 'react-router-dom'
import {Footer} from './components/componentsGlobal/Footer'
import { GuidesFrontend } from './pages/GuidesFrontend'
import { GuidesBackend } from './pages/GuidesBackend'
import { Streamers } from './pages/Streamers'
import { FiltersStreamerProvider } from './context/filterStreamer'
import { FilterGuidesProvider } from './context/filterGuides'
import { ResourcesBackend } from './pages/ResourcesBackend'
import { ResourcesFrontend } from './pages/ResourcesFrontend'
import './index.css'
import { Pruebas } from './components/pruebas'

function App() {

  const {isAuthenticated}= useAuth0()
  

  return ( 
    <FiltersStreamerProvider>
      <FilterGuidesProvider>
      {isAuthenticated ? <Navbar></Navbar>  : ""}
    
  <Routes> 
    <Route path='/' element={<Home></Home>}></Route>
    <Route path='/login' element={<Login ></Login>}></Route>
    <Route path='/guias/frontend' element={<GuidesFrontend ></GuidesFrontend>}></Route>
    <Route path='/guias/backend' element={<GuidesBackend ></GuidesBackend>}></Route>
    <Route path='/recursos/backend' element={<ResourcesBackend ></ResourcesBackend>}></Route>
    <Route path='/recursos/frontend' element={<ResourcesFrontend ></ResourcesFrontend>}></Route>
    <Route path='/creadores' element={<Streamers />}></Route>
  </Routes>
  {isAuthenticated ? <Footer></Footer>  : "a"}
  </FilterGuidesProvider>
    </FiltersStreamerProvider>
  )
}

export default App
