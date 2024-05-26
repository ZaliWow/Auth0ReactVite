import { createContext, useState } from "react";

export const FilterGuidesContext = createContext();

export function FilterGuidesProvider({children}) {
    const [filterGuidesBody, setFilterGuidesBody]= useState({
        lenguage:"all",
        level:"all"
    })
    return (
        <FilterGuidesContext.Provider value={{filterGuidesBody, setFilterGuidesBody}}>
            {children}
        </FilterGuidesContext.Provider>
    )
}
