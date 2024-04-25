import "../styles/logout.css"
import { useAuth0 } from "@auth0/auth0-react"
export function LogoutUser(params) {
const {logout} = useAuth0()
    return(
        <div className="logout">
        <button onClick={()=> logout()}>Logout</button>
        </div>
    )
}