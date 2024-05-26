import {useFilterGuides }from "../../hooks/useFilterGuides"

export function FilterGuidesLenguage() {
// Suggested code may be subject to a license. Learn more: ~LicenseLog:774115229.
    const { setFilterGuidesBody, filterGuidesBody } = useFilterGuides()
    const handleFilterGuidesLenguage = (e) => {
    setFilterGuidesBody(
        (prevState => ({
           ...prevState,
            lenguage:e.target.value,
        }))
    
    )
} 
    const handleFilterGuidesLevel = (e) => {
        setFilterGuidesBody(
            (prevState => ({
               ...prevState,
                level:e.target.value,
            }))
    
        )
    console.log(e.target.value)
    }

    return(
        <div className="flex ">
            <h1 className="w-1/2 p-4">estas filtrando por {filterGuidesBody.lenguage}, {filterGuidesBody.level}</h1>
             <select  onChange={handleFilterGuidesLenguage} className="block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 " name="lenguageGuides" id="lenguagesGuides">
            <option value="all">Todo</option>
            <option value="javascript">Javascript</option>
            <option value="python">Python</option>
            <option value="php">PHP</option>
            <option value="java">Java</option>
            <option value="ruby">Ruby</option>
            <option value="c">C</option>
        </select>
        
        <select  onChange={handleFilterGuidesLevel} className="block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 " name="lenguageGuides" id="lenguagesGuides">
            <option value="all">Todo</option>
            <option value="ez">facil</option>
            <option value="mid">intermedio</option>
            <option value="hard">dificil</option>
     
        </select>
        </div>
       
    )
}