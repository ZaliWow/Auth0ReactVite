import { useAuth0 } from "@auth0/auth0-react"

export function ProfileUser(params) {

const{user, isAuthenticated}= useAuth0()

  return(
    isAuthenticated &&
    (<div>
      <h1>Welcome {user.name}</h1>
      <h2>Your Email: {user.email}</h2>
<img src={user.picture} alt="foto de perfil" />

    </div>)
    
  )
 
}