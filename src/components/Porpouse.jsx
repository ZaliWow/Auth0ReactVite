export function Porpouse(params) {

  const itemsPorpouse = [{
    title:"Enseñanza",
    description:"Uno de los grandes propósitos de este blog personal es el de enseñar y contribuir con información útil para los colegas y personas que recién inician en el camino del desarrollo."
  },
  {  title:"Mostrar mi trabajo",
  description:"Ademas, el dar a conocer mi trabajo también es algo primordial para mi como individuo."},
  {  title:"Aprendizaje",
  description:"Durante el desarrollo de este blog personal, me he atrevido a utilizar las herramientas más solicitadas en el mundo laboral, teniendo que aprender muchas de ellas en el transcurso de el mismo."}]
    return(
        <div class="bg-pink-50 py-12">
  <div class="w-full mx-auto lg:px-40 ">
    <h2 class="text-3xl font-bold text-gray-900 mb-4 text-center ">Propósitos</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">

    {
          itemsPorpouse.map((item) => (
    <div class="bg-white rounded-lg shadow-md p-6 ">
        <h3 class="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
        <p class="text-gray-600">{item.description}</p>
      </div>

          ))}



      
    </div>
  </div>
</div>
    )
    
}