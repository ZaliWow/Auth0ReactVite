import { useAuth0 } from '@auth0/auth0-react'
import { Login } from "./Login"
import { CardsGuides } from '../components/componentsGuides/CardsGuides'
import { useFilterGuides } from '../hooks/useFilterGuides'


export function GuidesBackend(params) {
 

    const guidesBackend = [{
        title: "Titulo guia backend 1",
        photo: "",
        description: "esta es la guia 1",
        lenguage: "javascript",
        level:"hard",
        link:"https://www.google.com"
    },
    { 
        title: "Titulo guia backedn 2",
        photo: "",
        description: "esta es la guia 2",
        lenguage: "python",
        level:"hard",
        link:"https://www.google.com"
    },
    {
        title: "Titulo guia backend 9",
        photo: "",
        description: "esta es la guia 9",
        lenguage: "php",
        level:"hard",
        link:"https://www.google.com"
    },
    {
        title: "Titulo guia backend 3",
        photo: "",
        description: "esta es la guia 3",
        lenguage: "javascript",
        level:"hard",
        link:"https://www.google.com"
    },
    {
        title: "Titulo guia backedn 4",
        photo: "",
        description: "esta es la guia 4",
        lenguage: "python",
        level:"mid",
        link:"https://www.google.com"
    },
    {
        title: "Titulo guia backend 5",
        photo: "",
        description: "esta es la guia 5",
        lenguage: "c",
        level:"ez",
        link:"https://www.google.com"
    },
    {
        title: "Titulo guia backend 6",
        photo: "",
        description: "esta es la guia 6",
        lenguage: "java",
        level:"hard",
        link:"https://www.google.com"
    },
    {
        title: "Titulo guia backend 7",
        photo: "",
        description: "esta es la guia 7",
        lenguage: "ruby",
        level:"mid",
        link:"https://www.google.com"
    },{
        title: "Titulo guia backend 8",
        photo: "",
        description: "esta es la guia 8",
        lenguage: "sql",
        level:"ez",
        link:"https://www.google.com"
    },
    {
        title: "Titulo guia backend 10",
        photo: "",
        description: "esta es la guia 10",
        lenguage: "javascript",
        level:"hard",
        link:"https://www.google.com"
    },
    {
        title: "Titulo guia backedn 11",
        photo: "",
        description: "esta es la guia 11",
        lenguage: "python",
        level:"hard",
        link:"https://www.google.com"
    },
    {
        title: "Titulo guia backend 12",
        photo: "",
        description: "esta es la guia 12",
        lenguage: "php",
        level:"hard",
        link:"https://www.google.com"
    },
    {
        title: "Titulo guia backend 13",
        photo: "",
        description: "esta es la guia 13",
        lenguage: "javascript",
        level:"hard",
        link:"https://www.google.com"
    },
    {
        title: "Titulo guia backedn 14",
        photo: "",
        description: "esta es la guia 14",
        lenguage: "python",
        level:"hard",
        link:"https://www.google.com"
    }



    ]

    const { isAuthenticated, isLoading } = useAuth0()
    const { handleFilterGuides } = useFilterGuides()
    const filteredGuides = handleFilterGuides(guidesBackend)
    if (isLoading) return <h1>loading...</h1>


    if (isAuthenticated === false) return (<Login></Login>)

    return (
        <>
        <div>
        <h1 className="text-center text-2xl font-bold mb-4 mt-16">Guías Backend</h1>
        <CardsGuides itemsGuides={filteredGuides}></CardsGuides>
   </div>
            
        </>

    )
}