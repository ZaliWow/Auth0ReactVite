import { useContext, useState } from "react"
import { DictionaryContext } from "../../context/Dictionary"

export function Resources({ resources }) {

const {dictionaryTools} = useContext(DictionaryContext)


const itemsPerPage = 10
const [currentPage, setCurrentPage]=useState(1)
const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const totalPages = Math.ceil(resources.length / itemsPerPage);

const handlePrevious = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
};

const handleNext = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
};

const resourcesList = resources.slice( indexOfFirstItem, indexOfLastItem)




    return (
        <section className="w-full h-fill my-20    flex items-center justify-center">

        <div className="container mx-auto px-4">
          
            <div className="overflow-x-auto">
            <table className="min-w-full bg-white border min-h-80 max-h-80 border-gray-300">
                <thead>
                    <tr className="bg-pink-50 text-gray-900 uppercase text-sm leading-normal">
                        <th className="py-3 px-6 text-left">Nombre</th>
                        <th className="py-3 px-6 text-left">
                            Documentación
                        </th>
                        <th className="py-3 px-6 text-left">
                            Descripción
                        </th>
                      
                    </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                    {resources.length === 0 ? (
                        <tr>
                            <td colSpan="4" className="text-center py-24">No hay datos</td>
                        </tr>
                    ) : (
                        resourcesList.map(item => (
                            <tr className="border-b border-gray-300 hover:bg-gray-100 py-24 ">
                                <td className="py-3 px-6 text-left"> <span 
                                        className={`inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 ${dictionaryTools[item.name.toLowerCase()] || 'bg-gray-200'}`}
                                    > {item.name}
                                    </span></td>
                                <td className="py-3 px-6 text-left">{item.documentation}</td>
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