import { useAuth0 } from '@auth0/auth0-react'
import { Login } from "./Login"
import { RecommendedGuides } from '../components/componentsGuides/RecommendedGuides'
import { FilterGuidesLenguage } from '../components/componentsGuides/FilterGuidesLenguage'
import { CardsGuides } from '../components/componentsGuides/CardsGuides'
import {useFilterGuides} from '../hooks/useFilterGuides'





export function GuidesFrontend(params) {
    const { isAuthenticated, user, isLoading } = useAuth0()
    const itemsGuideFronted = [
    {title:"Titulo guia frontend 1", photo:"", description:"esta es la guia frontend 1",lenguage:"python"},
    {title:"Titulo guia frontend 2", photo:"", description:"esta es la guia frontend 2",lenguage:"python"}]
    const guidesFrontend =[
        {title:"Titulo guia frontend 1", 
        photo:"", 
        description:"esta es la guia frontend 1",
        lenguage:"javascript",
        level:"hard"},
        {title:"Titulo guia frontend 2", 
        photo:"", 
        description:"esta es la guia frontend 2",
        lenguage:"python",
        level:"hard"
    },
        {title:"Titulo guia frontend 3", 
        photo:"", 
        description:"esta es la guia frontend 3",
        lenguage:"javascript",
        level:"ez"},
    
    ]
    const {handleFilterGuides } = useFilterGuides()
    const filteredGuides = handleFilterGuides(guidesFrontend)


    if (isLoading) return <h1>loading...</h1>
    if (isAuthenticated === false) return (<Login></Login>)
    return(
        <>
        <RecommendedGuides itemsGuides={itemsGuideFronted}></RecommendedGuides>
          <FilterGuidesLenguage  ></FilterGuidesLenguage>    
          <CardsGuides itemsGuides={filteredGuides}></CardsGuides>
           </>
        
    )
}