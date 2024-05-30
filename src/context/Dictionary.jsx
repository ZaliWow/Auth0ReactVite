import { createContext, useState } from "react";

export const DictionaryContext = createContext();

export function DictionaryContextProvider ({children}) {
    const [dictionaryTools, setDictionaryTools] = useState( { 
    javascript: "bg-yellow-400",
    python: "bg-gray-200",
    react: "bg-blue-400",
    php: "bg-violet-400",
    sql: "bg-blue-900 text-white",
    html: "bg-red-400",
    css: "bg-blue-200",
});

    return (
        <DictionaryContext.Provider value={{dictionaryTools, setDictionaryTools}}>
            {children}
        </DictionaryContext.Provider>
    )

    
}