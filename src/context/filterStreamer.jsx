import { createContext, useState } from "react";

export const filtersStreamerContext = createContext();

export function FiltersStreamerProvider({children}) {
    const [filtersStreamersBody, setFiltersStreamersBody]= useState({
        category:"all",
        lenguage:"all",
    })
    return (
        <filtersStreamerContext.Provider 
        value={
            {filtersStreamersBody, 
            setFiltersStreamersBody}}>
            {children}
        </filtersStreamerContext.Provider>
    )
}
