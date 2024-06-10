import { motion, useInView } from "framer-motion";
import { useRef } from "react"
export function Porpouse(params) {


  const Motionref = useRef(null);
  const inView = useInView(Motionref, { triggerOnce: false, threshold: 0.1 });
  const itemsPorpouse = [{
    title:"Enseñanza",
    description:"Uno de los grandes propósitos de este blog personal es el de enseñar y contribuir con información útil para los colegas y personas que recién inician en el camino del desarrollo."
  },
  {  title:"Mostrar mi trabajo",
  description:"Ademas, el dar a conocer mi trabajo también es algo primordial para mi como individuo."},
  {  title:"Aprendizaje",
  description:"Durante el desarrollo de este blog personal, me he atrevido a utilizar las herramientas más solicitadas en el mundo laboral, teniendo que aprender muchas de ellas en el transcurso de el mismo."}]
    
  
  
  return(
      <>
        <div className="bg-pink-50 py-12">
  <div className="w-full mx-auto lg:px-40 ">
    <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center ">Propósitos</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {itemsPorpouse.map((item) => (
        <motion.div
        ref={Motionref}
          key={item.title}
          className="item bg-white rounded-lg shadow-md p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {  } }
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
          <p className="text-gray-600">{item.description}</p>
        </motion.div>
      ))}
    </div>
  </div>
</div>
</>
    )
    
}