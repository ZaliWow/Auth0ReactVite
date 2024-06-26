import { useState, useContext, useId } from "react"
import { useFiltersStreamer } from "../../hooks/useFilterStreamer"
import { DictionaryContext } from "../../context/Dictionary";



export function CartsStreamers() {
    const [streamers, setStreamers] = useState([
        {
            name: "Nombre 1",
            category: "backend",
            lenguage: [
                "javascript",
                "python",
                "sql",
                "php"
            ],
            description: " este es el streamer 1",
            image: ""
        },
        {
            name: "Nombre 2",
            category: "frontend",
            lenguage: [
                "javascript",
                "react"
            ],
            description: " este es el streamer 2",
            image: ""
        },
        {
            name: "Nombre 3",
            category: "backend",
            lenguage: [
                "javascript",

            ],
            description: " este es el streamer 3",
            image: ""
        },
        {
            name: "Nombre 4",
            category: "frontend",
            lenguage: [
                "javascript",
                "react"
            ],
            description: " este es el streamer 4",
            image: ""
        }, {
            name: "Nombre 5",
            category: "backend",
            lenguage: [
                "python",
                "html",
                "css"
            ],
            description: " este es el streamer 5",
            image: ""
        }
    ])

    const {dictionaryTools} = useContext(DictionaryContext)
    const idSpam = useId()
    const { handleFiltersStreamer, searchStreamer, termStreamerSearch } = useFiltersStreamer()
    const filteredStreamersSearch = searchStreamer(streamers)
    const filteredStreamers = handleFiltersStreamer(filteredStreamersSearch) 



    
    

    
    if (filteredStreamers.length === 0 ) return (

        <h1>La combinación que intentas filtrar no tiene resultados</h1>
    )
   
    if (filteredStreamers.length > 0) return (
        <section className=" w-full justify-center flex flex-wrap">


            {
                filteredStreamers.map(streamer => {
                    return (
                        <div key={streamer.name} className="max-w-sm m-8 rounded overflow-hidden shadow-lg max-h-96 bg-white">
                            <img className="w-full" src="https://via.placeholder.com/400x200" alt="Streamer Image" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">{streamer.name}</div>
                                <p className="text-gray-700 text-base">
                                    {streamer.description}
                                    {streamer.category}
                                   
                                </p>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                {streamer.lenguage.map((lengu) => {
                                    return(
                                        <span
                                        key={idSpam} 
                                        className={`inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 ${dictionaryTools[lengu.toLowerCase()] || 'bg-gray-200'}`}
                                    > {lengu}
                                    </span>
                                    )
                                    


                                })}
                            </div>
                        </div>
                    )

                })
            }

        </section>
    )
    




}