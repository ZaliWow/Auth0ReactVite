import { useState } from "react"
import { LogoutUser } from "./Logout";
import { useNavigate } from "react-router-dom";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showGuides, setShowGuides] = useState(false);
  const [showResources, setShowResources] = useState(false)
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Al abrir o cerrar el menú, también ocultamos las guías
    setShowGuides(false);
  };

  const handleGuides = () => {
    setShowGuides(!showGuides);
    setShowResources(false)
  };
  const handleResources = () => {
    setShowResources(!showResources)
    setShowGuides(false)
  }
  const handleBackend = () => {
    navigate("/guias/backend");
    setShowGuides(false); // Cerramos el menú al elegir una opción
  };

  const handleFrontend = () => {
    navigate("/guias/frontend");
    setShowGuides(false); // Cerramos el menú al elegir una opción
  };
  const handleResourcesFrontend = () => {
    navigate("/recursos/frontend");
    setShowGuides(false); // Cerramos el menú al elegir una opción
  };
  const handleResourcesBackend = () => {
    navigate("/recursos/backend");
    setShowGuides(false); // Cerramos el menú al elegir una opción
  };
  const handleHome = () => {
    navigate("/");
    setIsOpen(false); // Cerramos el menú al cambiar de página
  };
  const handleStreamers = () => {
    navigate("/creadores");
    setIsOpen(false); // Cerramos el menú al cambiar de página
  }



  return (
    <nav className="bg-pink-50 p-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="text-gray-800 text-xl font-bold">
            Mi Sitio
          </a>
        </div>
        <div className="hidden md:block">
          <a onClick={handleHome} className=" text-gray-800 hover:text-gray-900 px-3 py-2">
            Inicio
          </a>
          <a onClick={handleGuides} className="text-gray-800 hover:text-gray-900 px-3 py-2">
            Guías
          </a>
          {showGuides && (
            <div className="absolute bg-white py-1 mt-2 rounded-md shadow-lg">
              <a onClick={handleBackend} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Guias Backend</a>
              <a onClick={handleFrontend} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Guias Frontend</a>
            </div>
          )}
          <a onClick={handleResources} className="text-base text-gray-800 hover:text-gray-900 px-3 py-2">Recursos</a>
          {
            showResources && (
              <div className="absolute bg-white py-1 mt-2 rounded-md shadow-lg">
                <a onClick={handleResourcesBackend} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Recursos Backend</a>
                <a onClick={handleFrontend} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Recursos Frontend</a>
              </div>
            )

          }

          <a href="#" className="text-gray-800 hover:text-gray-900 px-3 py-2">Articulos</a>
          <a href="#" onClick={handleStreamers} className="text-gray-800 hover:text-gray-900 px-3 py-2">Creadores</a>
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
            <a onClick={handleHome} className="text-gray-800 hover:text-gray-900 block px-3 py-2">Inicio</a>
            <a onClick={handleGuides} className="text-gray-800 hover:text-gray-900 block px-3 py-2">Guías</a>
            {showGuides && (
              <div>
                <a onClick={handleBackend} className="text-gray-800 hover:text-gray-900 block px-10 py-2"> Backend</a>
                <a onClick={handleFrontend} className="text-gray-800 hover:text-gray-900 block px-10 py-2"> Frontend</a>
              </div>
            )}
            <a onClick={handleResources} className="text-gray-800 hover:text-gray-900 block px-3 py-2">Recursos</a>
            {showResources && (
              <div>
                <a onClick={handleResourcesBackend} className="text-gray-800 hover:text-gray-900 block px-10 py-2">Recursos Backend</a>
                <a onClick={handleResourcesFrontend} className="text-gray-800 hover:text-gray-900 block px-10 py-2">Recursos Frontend</a>
              </div>
            )}
            <a href="#" onClick={handleStreamers}  className="text-gray-800 hover:text-gray-900 block px-3 py-2">Creadores</a>
          </div>
        </div>
      )}
    </nav>
  );
}