import { useAuth0 } from "@auth0/auth0-react"
import { useNavigate } from "react-router-dom"



export function LogoutUser(params) {


const {logout} = useAuth0()
const handleLogout = () =>{
    logout()
    
}
    return(
<button className="bg-pink-500 text-white hover:bg-pink-600 font-bold py-2 px-4 rounded ml-10" onClick={handleLogout}>
  Logout
</button>
       
    )
}