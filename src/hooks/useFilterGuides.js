import { FilterGuidesContext } from "../context/filterGuides";
import { useContext } from "react";

export function useFilterGuides() {
    const {filterGuidesBody, setFilterGuidesBody} = useContext(FilterGuidesContext);
    
    const handleFilterGuides = (guides) =>{
        return guides.filter(guide =>{

            const levelAll = filterGuidesBody.level === "all" || filterGuidesBody.level === "";
            const languageAll = filterGuidesBody.lenguage === "all" || filterGuidesBody.lenguage === "";
        
            if (levelAll && languageAll) { 
              return true; // Mostrar todos los streamers
         
        } else if (levelAll && !languageAll) {
            return guide.lenguage === filterGuidesBody.lenguage
          
            } else if (!levelAll && languageAll) {
              return guide.level === filterGuidesBody.level;
         
        } else {
return guide.level === filterGuidesBody.level && guide.lenguage === filterGuidesBody.lenguage;
        
        }



        })
    }

return {filterGuidesBody, handleFilterGuides, setFilterGuidesBody}


}
    
