import { useAuth0 } from '@auth0/auth0-react'
import { Login } from "./Login"
import { RecommendedGuides } from "../components/componentsGuides/RecommendedGuides"
import { FilterGuidesLenguage } from '../components/componentsGuides/FilterGuidesLenguage'
import { CardsGuides } from '../components/componentsGuides/CardsGuides'
import { useFilterGuides } from '../hooks/useFilterGuides'


export function GuidesBackend(params) {
    const itemsGuideBackend =
        [{
            title: "Titulo guia backend 1",
            photo: "",
            description: "esta es la guia 1",
            lenguage: "javascript",
            level:"ez"
        },
        {
            title: "Titulo guia backedn 2",
            photo: "",
            description: "esta es la guia 2",
            lenguage: "python",
            level:"mid"
        }]

    const guidesBackend = [{
        title: "Titulo guia backend 1",
        photo: "",
        description: "esta es la guia 1",
        lenguage: "javascript",
        level:"hard"
    },
    { 
        title: "Titulo guia backedn 2",
        photo: "",
        description: "esta es la guia 2",
        lenguage: "python",
        level:"hard"
    },
    {
        title: "Titulo guia backend 9",
        photo: "",
        description: "esta es la guia 9",
        lenguage: "php",
        level:"hard"
    },
    {
        title: "Titulo guia backend 3",
        photo: "",
        description: "esta es la guia 3",
        lenguage: "javascript",
        level:"hard"
    },
    {
        title: "Titulo guia backedn 4",
        photo: "",
        description: "esta es la guia 4",
        lenguage: "python",
        level:"mid"
    },
    {
        title: "Titulo guia backend 5",
        photo: "",
        description: "esta es la guia 5",
        lenguage: "c",
        level:"ez"
    },
    {
        title: "Titulo guia backend 6",
        photo: "",
        description: "esta es la guia 6",
        lenguage: "java",
        level:"hard"
    },
    {
        title: "Titulo guia backend 7",
        photo: "",
        description: "esta es la guia 7",
        lenguage: "ruby",
        level:"mid"
    },{
        title: "Titulo guia backend 8",
        photo: "",
        description: "esta es la guia 8",
        lenguage: "sql",
        level:"ez"
    }



    ]

    const { isAuthenticated, isLoading } = useAuth0()
    const { handleFilterGuides } = useFilterGuides()
    const filteredGuides = handleFilterGuides(guidesBackend)
    if (isLoading) return <h1>loading...</h1>


    if (isAuthenticated === false) return (<Login></Login>)

    return (
        <>
            <RecommendedGuides itemsGuides={itemsGuideBackend}></RecommendedGuides>
            <FilterGuidesLenguage></FilterGuidesLenguage>
            <CardsGuides itemsGuides={filteredGuides}></CardsGuides>
        </>

    )
}