import { Resources } from "../components/componentsResources/Resources";
export function ResourcesFrontend(params) {

const resourcesFrontend = [
    {
        name:"javascript",
        description:"This is a javascript description",
        documentation:"https://www.javascript.com/",
    },
    {
        name:"react",
        description:"This is a react description",
        documentation:"https://reactjs.org/",
    },
    {
        name:"angular",
        description:"This is a angular description",
        documentation:"https://angular.io/",
    },
    {
        name:"vue",
        description:"This is a vue description",
        documentation:"https://vuejs.org/",
    },
    {
        name:"svelte",
        description:"This is a svelte description",
        documentation:"https://svelte.dev/",
    },
    {
        name:"javascript",
        description:"This is a javascript description",
        documentation:"https://www.javascript.com/",
    },
    {
        name:"react",
        description:"This is a react description",
        documentation:"https://reactjs.org/",
    },
    {
        name:"angular",
        description:"This is a angular description",
        documentation:"https://angular.io/",
    },
    {
        name:"vue",
        description:"This is a vue description",
        documentation:"https://vuejs.org/",
    },
    {
        name:"svelte",
        description:"This is a svelte description",
        documentation:"https://svelte.dev/",
    },
    {
        name:"javascript2",
        description:"This is a javascript description",
        documentation:"https://www.javascript.com/",
    },
    {
        name:"react2",
        description:"This is a react description",
        documentation:"https://reactjs.org/",
    },
    {
        name:"angular2",
        description:"This is a angular description",
        documentation:"https://angular.io/",
    },
    {
        name:"vue2",
        description:"This is a vue description",
        documentation:"https://vuejs.org/",
    },
    {
        name:"svelte2",
        description:"This is a svelte description",
        documentation:"https://svelte.dev/",
    },
    {
        name:"javascript2",
        description:"This is a javascript description",
        documentation:"https://www.javascript.com/",
    },
    {
        name:"react2",
        description:"This is a react description",
        documentation:"https://reactjs.org/",
    },
    {
        name:"angular2",
        description:"This is a angular description",
        documentation:"https://angular.io/",
    },
    {
        name:"vue2",
        description:"This is a vue description",
        documentation:"https://vuejs.org/",
    },
    {
        name:"svelte2",
        description:"This is a svelte description",
        documentation:"https://svelte.dev/",
    }
]

    return(
        <div className='pt-16'>
             <h1 className="text-center text-2xl font-bold mb-4 mt-16">Tecnologías frontend</h1>
        <Resources resources={resourcesFrontend}></Resources>
        </div>
    )
}