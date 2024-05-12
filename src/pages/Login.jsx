import "../styles/login.css"
import { useAuth0 } from "@auth0/auth0-react"
import { useNavigate } from 'react-router-dom'
import { useEffect } from "react"


export function Login({loged, setLoged}) {
    const { loginWithRedirect,getAccessTokenSilently } = useAuth0()
    const { isAuthenticated } = useAuth0()
    const navigate = useNavigate()

    useEffect(() => {
        if (isAuthenticated === false) {
            navigate("/login")
        } else {
       
        }
      
    }, [isAuthenticated])
    return (
        <div className="login">
            <button onClick={() => loginWithRedirect()}>Login</button>
        </div>
    )
}