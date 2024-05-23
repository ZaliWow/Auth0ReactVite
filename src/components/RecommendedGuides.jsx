export function RecommendedGuides({itemsGuides}){

        return (
            <section className="flex bg-gray-100 py-12">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-8">Guías Recomendadas</h2>
            
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {
                itemsGuides.map((item) => (
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                          <img src={item.photo} alt="Guía 1" className="w-full h-48 object-cover" />
                          <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                            <p className="text-gray-700">{item.description}</p>
                            <a href="#" className="block mt-4 text-center bg-pink-500 text-white hover:bg-pink-600 font-semibold py-2 px-4 rounded">
                              Ver más
                            </a>
                          </div>
                        </div>
                   
                
                 
                
                ))}
                      </div>
                </div>
                </section>
           );
   
}