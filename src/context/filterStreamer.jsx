import { createContext, useState } from "react";

export const filtersStreamerContext = createContext();

export function FiltersStreamerProvider({children}) {
    const [filtersStreamersBody, setFiltersStreamersBody]= useState({
        category:"all",
        lenguage:"all",
    })
    const [termStreamerSearch, setTermStreamerSearch] = useState("")
    return (
        <filtersStreamerContext.Provider 
        value={
            {filtersStreamersBody, 
            setFiltersStreamersBody,
            termStreamerSearch,
            setTermStreamerSearch
            }}>
            {children}
        </filtersStreamerContext.Provider>
    )
}
