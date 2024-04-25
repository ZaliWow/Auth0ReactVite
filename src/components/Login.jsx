import "../styles/login.css"
import { useAuth0 } from "@auth0/auth0-react"

export function Login() {
    const { loginWithRedirect } = useAuth0()
    return (
        <div className="login">

            <button onClick={() => loginWithRedirect()}>login</button>
        </div>
    )
}