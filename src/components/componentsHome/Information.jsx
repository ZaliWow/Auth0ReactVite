import { useNavigate } from "react-router-dom";
export function Information(params) {
const items = [{
    title:"Guías Prácticas",
    description:"Puedes acceder a un sin fin de guías que he estado recopilando a través de mis investigaciones",
    callaction:"Ver guías",
    navigate:"guias"
},{
    title:"Artículos Profundos",
    description:"Sumérgete en publicaciones profundas que exploran una amplia gama de temas y ofrecen análisis detallados y perspectivas únicas.",
    callaction:"Ver artículos",
    navigate: "recursos"
},{
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3595286310.
    title:"Recursos Útiles",
    description:"Gran cantidad de recursos que te ayudarán a la hora de desarrollar.",
    callaction:"Ver recursos",
    navigate: "recursos"
}
,{
    title:"Creadores de contenido",
    description:"Los mejores creadores de contenido para aprender desarrollo web.",
    callaction:"Ver creadores",
    navigate: "creadores"
}
]
// Suggested code may be subject to a license. Learn more: ~LicenseLog:325156225.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:1446681874.
const navigate = useNavigate();
const handleNavigate = (url) => {
    navigate(`/${url}`)
  };

    return(
        <div className=" py-12">
  <div className="w-full mx-auto px-4">
    <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">¿Qué encontrarás?</h2>
    <div className="flex flex-wrap justify-center gap-8">

    {
          items.map((item) => (
            <div key={item.title} className="flex flex-col items-center justify-center bg-white rounded-lg shadow-md p-8 w-full sm:w-1/2 lg:w-1/3">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">{item.title}</h3>
            <p className="text-gray-600 text-center">{item.description}</p>
            <div className="text-center mt-8">
         <a onClick={() => handleNavigate(item.navigate)}className="bg-pink-500  hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-full shadow-md transition duration-300 ease-in-out inline-block">{item.callaction}</a>
        </div>
          </div>
          )
          )}

    
    </div>
  </div>
</div>
    )
}