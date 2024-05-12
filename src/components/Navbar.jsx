import { useState } from "react"
import { LogoutUser } from "./Logout";
export function Navbar(){

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    return(
         <nav className="bg-pink-50 p-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="text-gray-800 text-xl font-bold">Mi Sitio</a>
        </div>
        <div className="hidden md:block">
          <a href="#" className="text-lg text-gray-800 hover:text-gray-900 px-3 py-2">Inicio</a>
          <a href="#" className="text-gray-800 hover:text-gray-900 px-3 py-2">Acerca</a>
          <a href="#" className="text-base text-gray-800 hover:text-gray-900 px-3 py-2">Servicios</a>
          <a href="#" className="text-gray-800 hover:text-gray-900 px-3 py-2">Contacto</a>
        <LogoutUser></LogoutUser>
                </div>
        <div className="md:hidden">
          <button className="text-gray-300 hover:text-white focus:outline-none" onClick={toggleMenu}>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Menú desplegable para pantallas pequeñas */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#" className="text-gray-300 hover:text-white block px-3 py-2">Inicio</a>
            <a href="#" className="text-gray-300 hover:text-white block px-3 py-2">Acerca</a>
            <a href="#" className="text-gray-300 hover:text-white block px-3 py-2">Servicios</a>
            <a href="#" className="text-gray-300 hover:text-white block px-3 py-2">Contacto</a>
          </div>
        </div>
      )}
    </nav>
    )
}