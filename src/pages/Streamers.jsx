import { CartsStreamers } from "../components/componentsStreamers/CartsStreamers";
import { FilterStreamer } from "../components/componentsStreamers/FilterStreamer";
import { useAuth0 } from '@auth0/auth0-react'
import { Login } from "./Login"

export function Streamers(params) {
  const { isAuthenticated, user, isLoading } = useAuth0()
  if (isLoading) return <h1>loading...</h1>


  if (isAuthenticated === false) return (<Login></Login>)
   
    return(
       
        <div className="flex flex-col md:flex-row min-h-screen">
 <FilterStreamer ></FilterStreamer>
        <CartsStreamers ></CartsStreamers>
        </div>
         
     
        
    )
}