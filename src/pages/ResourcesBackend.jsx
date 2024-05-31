import { Resources } from "../components/componentsResources/Resources"

export function ResourcesBackend(params) {
const resourcesBackend =[
    {
        name:"javascript",
        description:"This is a javascript description",
        documentation:"https://www.javascript.com/",
    },
    {
        name:"python",
        description:"This is a python description",
        documentation:"https://www.python.org/",
    },
    {
        name:"java",
        description:"This is a java description",
        documentation:"https://www.java.com/",
    }, 
    {
        name:"c++",
        description:"This is a c++ description",
        documentation:"https://www.cplusplus.com/",
    },
    {
        name:"c",
        description:"This is a c description",
        documentation:"https://www.cprogramming.com/",
    },
    {
        name:"php",
        description:"This is a php description",
        documentation:"https://www.php.net/",
    },
    {
        name:"ruby",
        description:"This is a ruby description",
        documentation:"https://www.ruby-lang.org/",
    },
    {
        name:"sql",
        description:"This is a sql description",
        documentation:"https://www.w3schools.com/sql/",
    },
    {
        name:"spring boot",
        description:"This is a spring boot description",
        documentation:"https://spring.io/"
    },
    {
        name:"express",
        description:"This is a express description",
        documentation:"https://expressjs.com"
    },
    {
        name:"node",
        description:"This is a node description",
        documentation:"https://nodejs.org/en/"
    }
]



    return(
        <div className='pt-16'>
        <h1 className="text-center text-2xl font-bold mb-4 mt-16">Tecnologías Backend</h1>
   <Resources resources={resourcesBackend}></Resources>
   </div>
    )
}