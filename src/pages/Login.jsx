
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
        <div className="w-full h-screen justify-center items-center flex bg-HeroHome bg-center bg-cover">
            <div className="bg-pink-50/70 rounded-lg p-4">
                <h1 className="text-black text-center text-2xl font-bold mb-4">Bienvenido</h1>
                <p className="text-black text-lg mb-4">Inicia sesión para acceder a tu cuenta.</p>
                <div className="flex flex-col gap-4">
                    <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"  onClick={() => loginWithRedirect()}>Entrar</button>
                </div>
            </div>
           
           
        </div>
    )
}

  