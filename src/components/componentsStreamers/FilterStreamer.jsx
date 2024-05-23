import { useState } from "react"
import { useFiltersStreamer } from "../../hooks/useFilterStreamer"
export function FilterStreamer() {

const {setFiltersStreamersBody, filtersStreamersBody} = useFiltersStreamer();

    const handleFilterCategory = (e) => {
       
        setFiltersStreamersBody(prevState => ({
            ...prevState,
            category:e.target.value,
        }))
        
       
    }
    const handleFilterLenguage= (e) => {
        setFiltersStreamersBody(prevState => ({
            ...prevState,
            lenguage:e.target.value,
        }))
    }

    return(
        <section className="flex flex-col items-center py-8 w-full">   
        <h1 className="text-2xl">Creadores de contenido</h1>
        <div className="flex flex-col md:flex-row w-full bg-red-500"> 
            <div className="flex  justify-center md:w-1/4  px-8 bg-blue-50 md:flex-col  ">
               
                <div className="md:py-8  px-8">
                     <select onChange={handleFilterCategory} className="block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 " name="category" id="categoryStreamer">
                    <option value="all">Todo</option> 
                    <option value="backend">Backend</option>
                    <option value="frontend">Frontend</option>
                 
                </select>
                </div >
{/* Suggested code may be subject to a license. Learn more: ~LicenseLog:3671192549. */}
                <div className="md:py-8 px-8">
                <select  onChange= {handleFilterLenguage} className="block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 " name="lenguage" id="lenguageStreaner">
                    <option value="all">Todo</option>
                    <option value="javascript">Javascript</option>
                    <option value="python">Python</option>
                    <option value="react">React</option>
                  
                </select>
                
                </div>
            </div>
            <div className="md:w-3/4  px-8 bg-gray-500"> soy div 2</div>
        </div>
        
        
        </section>
    )
}