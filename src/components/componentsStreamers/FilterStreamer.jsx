import { useState } from "react"
import { useFiltersStreamer } from "../../hooks/useFilterStreamer"
  import Select from 'react-select';

export function FilterStreamer() {
  
const {setFiltersStreamersBody, filtersStreamersBody, setTermStreamerSearch} = useFiltersStreamer();
  const customStyles = {
        control: (provided) => ({
          ...provided,
          width: '100%',
          border: '1px solid #d1d5db', // border-gray-300
          borderRadius: '0.375rem', // rounded-md
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
          '&:hover': {
            borderColor: '#ec4899', // focus:border-pink-500
          },
          zIndex: 10, // Añadir z-index al control
        }),
        menu: (provided) => ({
          ...provided,
          zIndex: 20, // Añadir z-index al menú
          position: 'absolute', // Asegurar que el menú se posiciona fuera del flujo del documento
        }),
        menuPortal: (provided) => ({
          ...provided,
          zIndex: 30, // Asegurar que el menú portal tiene un z-index alto
        }),
        option: (provided, state) => ({
          ...provided,
          backgroundColor: state.isFocused ? '#f472b6' : '#fff', // hover:bg-pink-500
          color: state.isFocused ? '#fff' : '#000',
          '&:hover': {
            backgroundColor: '#f472b6',
            color: '#fff',
          },
        }),
      };
      const optionsFByCategory = [
        { value: 'all', label: 'Todo' },
        { value: 'backend', label: 'Backend' },
        { value: 'frontend', label: 'Frontend' },
       
    ]
    const optionsTecnology = [
        { value: 'all', label: 'Todo' },
        { value: 'javascript', label: 'Javascript' },
        { value: 'python', label: 'Python' },
        { value: 'php', label: 'PHP' },
        { value: 'java', label: 'Java' },
        { value: 'ruby', label: 'Ruby' },
        { value: 'c', label: 'C' },
    ];
    const handleFilterCategory = (e) => {
       
        setFiltersStreamersBody(prevState => ({
            ...prevState,
            category:e.value,
        }))
        
       
    }
    const handleFilterLenguage= (e) => {
        setFiltersStreamersBody(prevState => ({
            ...prevState,
            lenguage:e.value,
        }))
    }
    const handleFilterSearch= (e) => {
        setTermStreamerSearch(e.target.value)
        
    }
    return(
        <section className="flex flex-col items-center py-8 md:w-1/3 w-screen">   
        <h1 className="text-2xl font-bold">Creadores de contenido</h1>
        
      
        <input 
            id="username" 
            type="text" 
            onChange={handleFilterSearch}
            placeholder="Ingresa tu nombre de usuario"
            className="appearance-none block  bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 shadow-sm"
        />

            <div className="flex  justify-center md:w-full  px-8  md:flex-col  ">
               
                <div className="md:py-8  px-8">
                <Select
                                        options={optionsFByCategory}
                                        onChange={handleFilterCategory}
                                        styles={customStyles}
                                        placeholder="Dificultad"
                                    />
                </div >
{/* Suggested code may be subject to a license. Learn more: ~LicenseLog:3671192549. */}
                <div className="md:py-8 px-8">
                <Select
                                        options={optionsTecnology}
                                        onChange={handleFilterLenguage}
                                        styles={customStyles}
                                        placeholder="Tecnología" />
                
                </div>
            </div>
           
   
        
        
        </section>
    )
}