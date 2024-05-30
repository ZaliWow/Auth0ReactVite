import { filtersStreamerContext } from "../context/filterStreamer";
import { useContext } from "react";

export function useFiltersStreamer(){ 

    const {filtersStreamersBody, setFiltersStreamersBody, termStreamerSearch, setTermStreamerSearch} = useContext(filtersStreamerContext);
    
    const searchStreamer = (streamers) =>{
      return streamers.filter(item => {
        return Object.values(item).some(value => 
            value.toString().toLowerCase().includes(termStreamerSearch.toLowerCase())
        );
    });
    }

    const handleFiltersStreamer= (streamers)=>{
    return streamers.filter( streamer =>{
      const categoryAll = filtersStreamersBody.category === "all" || filtersStreamersBody.category === "";
      const languageAll = filtersStreamersBody.lenguage === "all" || filtersStreamersBody.lenguage === "";
      
      if (categoryAll && languageAll) {
        return true; // Mostrar todos los streamers
      } else if (categoryAll && !languageAll) {
        return streamer.lenguage.includes(filtersStreamersBody.lenguage);
      } else if (!categoryAll && languageAll) {
        return streamer.category === filtersStreamersBody.category;
      } else {
        return streamer.category === filtersStreamersBody.category && streamer.lenguage.includes(filtersStreamersBody.lenguage);
      }
    });
  
  }

return {handleFiltersStreamer, filtersStreamersBody, setFiltersStreamersBody, searchStreamer, termStreamerSearch, setTermStreamerSearch}
}
