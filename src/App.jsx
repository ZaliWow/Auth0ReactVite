
import { Login } from './components/Login'
import {ProfileUser} from './components/Profile'
import { useAuth0 } from '@auth0/auth0-react'
import { LogoutUser } from "./components/Logout"

function App() {

  const {isAuthenticated}= useAuth0()
console.log(isAuthenticated)
  return (
    <>
      {isAuthenticated ?<LogoutUser></LogoutUser> :<Login></Login> }
      <ProfileUser></ProfileUser>
    </>
  )
}

export default App
