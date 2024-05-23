import { RecommendedGuides } from "../components/RecommendedGuides"
import { useAuth0 } from '@auth0/auth0-react'
import { Login } from "./Login"


export function GuidesBackend(params) {
    const itemsGuideBackend = [{title:"", photo:"", description:""},
    {title:"", photo:"", description:""}]
    const { isAuthenticated, user, isLoading } = useAuth0()
    
    if (isLoading) return <h1>loading...</h1>


    if (isAuthenticated === false) return (<Login></Login>)
 
    return(
        <RecommendedGuides itemsGuides={itemsGuideBackend}></RecommendedGuides>
    )
}