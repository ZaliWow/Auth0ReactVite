import { useEffect, useState } from "react"
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { Login } from "./Login"
import { Porpouse } from "../components/Porpouse"
import { AboutMe } from "../components/AboutMe"
import { Information } from "../components/Information"


export function Home(params) {
    const { isAuthenticated, user, isLoading } = useAuth0()
    const [loadingUser, setLoadingUser] = useState()
    const navigate = useNavigate()



    if (isLoading) return <h1>loading...</h1>


    if (isAuthenticated === false) return (<Login></Login>)

    return (
        <>
        
        <AboutMe></AboutMe>
        <Porpouse></Porpouse>
        <Information></Information>
        </>

    )

}