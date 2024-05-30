import { useFilterGuides } from "../../hooks/useFilterGuides"
import Select from 'react-select';
import { useState } from "react";

export function CardsGuides({ itemsGuides }) {

    const { setFilterGuidesBody, filterGuidesBody } = useFilterGuides()
    const handleFilterGuidesLenguage = (e) => {
        console.log(e.value)
        setFilterGuidesBody(
            (prevState => ({
                ...prevState,
                lenguage: e.value,
            }))

        )
    }
    const handleFilterGuidesLevel = (e) => {
        console.log(e.value)
        setFilterGuidesBody(
            (prevState => ({
                ...prevState,
                level: e.value,
            }))

        )

    }
    const optionsTecnology = [
        { value: 'all', label: 'Todo' },
        { value: 'javascript', label: 'Javascript' },
        { value: 'python', label: 'Python' },
        { value: 'php', label: 'PHP' },
        { value: 'java', label: 'Java' },
        { value: 'ruby', label: 'Ruby' },
        { value: 'c', label: 'C' },
    ];
    const optionsLevel = [
        { value: 'all', label: 'Todo' },
        { value: 'ez', label: 'Principiante' },
        { value: 'mid', label: 'Intermedio' },
        { value: 'hard', label: 'Avanzado' },
    ]

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
//pagination 
const itemsPerPage = 10
const [currentPage, setCurrentPage]=useState(1)
const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const totalPages = Math.ceil(itemsGuides.length / itemsPerPage);

const handlePrevious = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
};

const handleNext = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
};
const itemsList= itemsGuides.slice( indexOfFirstItem, indexOfLastItem)

    return (
        <section className="w-full h-fill my-20 py-4   flex items-center justify-center">

            <div className="container mx-auto px-4">
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border min-h-80 border-gray-300">
                        <thead>
                            <tr className="bg-pink-50 text-gray-900 uppercase text-sm leading-normal">
                                <th className="py-3 px-6 text-left">Nombre</th>
                                <th className="py-3 px-6 text-left">


                                    <Select
                                        options={optionsLevel}
                                        onChange={handleFilterGuidesLevel}
                                        styles={customStyles}
                                        placeholder="Dificultad"
                                    />

                                </th>
                                <th className="py-3 px-6 text-left">
                                    <Select
                                        options={optionsTecnology}
                                        onChange={handleFilterGuidesLenguage}
                                        styles={customStyles}
                                        placeholder="Tecnología" />
                                </th>
                                <th className="py-3 px-6 text-left">descripción</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 text-sm font-light">
                            {itemsList.length === 0 ? (
                                <tr>
                                    <td colSpan="4" className="text-center py-24">No hay datos</td>
                                </tr>
                            ) : (
                                itemsList.map(item => (
                                    <tr key={item.id} className="border-b border-gray-300 hover:bg-gray-100 py-24 ">
                                        <td className="py-3 px-6 text-left"> <a className="text-pink-500 hover:text-pink-700 underline" href={item.link} target="_blank">{item.title}</a> </td>
                                        <td className="py-3 px-6 text-left">{item.level}</td>
                                        <td className="py-3 px-6 text-left">{item.lenguage}</td>
                                        <td className="py-3 px-6 text-left">{item.description}</td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                    <div className="flex justify-between mt-4">
                        <button
                            onClick={handlePrevious}
                            disabled={currentPage === 1}
                            className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
                        >
                            Anterior
                        </button>
                        <span className="px-4 py-2">
                            Página {currentPage} de {totalPages}
                        </span>
                        <button
                            onClick={handleNext}
                            disabled={currentPage === totalPages}
                            className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
                        >
                            Siguiente
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}