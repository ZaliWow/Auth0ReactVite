import { useState } from "react"
import { useAuth0 } from '@auth0/auth0-react'
import { Login } from "./Login"
import { AboutMe } from "../components/componentsHome/AboutMe"
import { Information } from "../components/componentsHome/Information"
import {Porpouse} from "../components/componentsHome/Porpouse"
import { HeroHome } from "../components/componentsHome/HeroHome"

export function Home(params) {
    const { isAuthenticated, user, isLoading } = useAuth0()
    const [loadingUser, setLoadingUser] = useState()
    



    if (isLoading) return <h1>loading...</h1>


    if (isAuthenticated === false) return (<Login></Login>)

    return (
        <>
        <HeroHome></HeroHome>
        <AboutMe></AboutMe>
        <Porpouse></Porpouse>
        <Information></Information>
    
        </>

    )

}