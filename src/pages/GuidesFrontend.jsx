import { useAuth0 } from '@auth0/auth0-react'
import { Login } from "./Login"
import { RecommendedGuides } from '../components/componentsGuides/RecommendedGuides'
import { CardsGuides } from '../components/componentsGuides/CardsGuides'
import {useFilterGuides} from '../hooks/useFilterGuides'





export function GuidesFrontend(params) {
    const { isAuthenticated, user, isLoading } = useAuth0()
       const guidesFrontend =[
        {title:"Titulo guia frontend 1", 
        photo:"", 
        description:"esta es la guia frontend 1",
        lenguage:"javascript",
        level:"hard",
        link:"https://www.google.com"
    },
        {title:"Titulo guia frontend 2", 
        photo:"", 
        description:"esta es la guia frontend 2",
        lenguage:"python",
        level:"hard",
        link:"https://www.google.com"
    },
        {title:"Titulo guia frontend 3", 
        photo:"", 
        description:"esta es la guia frontend 3",
        lenguage:"javascript",
        level:"ez",
        link:"https://www.google.com"
    }, 
        {title:"Titulo guia frontend 4", 
        photo:"", 
        description:"esta es la guia frontend 4",
        lenguage:"python",
        level:"ez",
        link:"https://www.google.com"
    },  {
        title:"Titulo guia frontend 5", 
        photo:"", 
        description:"esta es la guia frontend 5",
        lenguage:"javascript",
        level:"mid",
        link:"https://www.google.com"
    }, 
        {title:"Titulo guia frontend 6", 
        photo:"", 
        description:"esta es la guia frontend 6",
        lenguage:"python",
        level:"mid",
        link:"https://www.google.com"
    }, 
    
    ]
    const {handleFilterGuides } = useFilterGuides()
    const filteredGuides = handleFilterGuides(guidesFrontend)


    if (isLoading) return <h1>loading...</h1>
    if (isAuthenticated === false) return (<Login></Login>)
    return(
        <>
  
          <CardsGuides itemsGuides={filteredGuides}></CardsGuides>
           </>
        
    )
}