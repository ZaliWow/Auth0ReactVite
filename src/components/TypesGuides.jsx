import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export function TypesGuides(params) {
    const [selectedOption, setSelectedOption] = useState(null);
    const navigate = useNavigate();
    return (
        <div className="py-10 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
            <h2 className="text-3xl font-bold mb-6 text-center">Selecciona una guía:</h2>
            <div className="grid grid-cols-1 gap-4">
              <button
                className={`bg-pink-500 text-white hover:bg-pink-600 font-semibold py-3 rounded-lg focus:outline-none ${
                  selectedOption === 'backend' ? 'opacity-100' : 'opacity-75'
                }`}
                onClick={() => navigate("/guias/backend") }
              >
                Guías de Backend
              </button>
              <button
                className={`bg-pink-500 text-white hover:bg-pink-600 font-semibold py-3 rounded-lg focus:outline-none ${
                  selectedOption === 'frontend' ? 'opacity-100' : 'opacity-75'
                }`}
                onClick={() => navigate('/guias/frontend')}
              >
                Guías de Frontend
              </button>
            </div>
            {selectedOption && (
              <p className="mt-6 text-center text-lg">
                Has seleccionado: {selectedOption === 'backend' ? 'Backend' : 'Frontend'}
              </p>
            )}
          </div>
        </div>
      );
}