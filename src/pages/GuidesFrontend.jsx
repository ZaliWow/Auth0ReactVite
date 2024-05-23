import { useAuth0 } from '@auth0/auth0-react'
import { Login } from "./Login"
import { RecommendedGuides } from '../components/RecommendedGuides'


export function GuidesFrontend(params) {
    const { isAuthenticated, user, isLoading } = useAuth0()
    const itemsGuideFronted = [{title:"", photo:"", description:""},
    {title:"", photo:"", description:""}]


    if (isLoading) return <h1>loading...</h1>


    if (isAuthenticated === false) return (<Login></Login>)
    return(
        <>
       
        <RecommendedGuides itemsGuides={itemsGuideFronted}></RecommendedGuides>
        </>
        
    )
}