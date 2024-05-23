export function Footer(params) {
    return(
<footer className=" bg-pink-500 text-white py-8">
  <div className="max-w-6xl mx-auto px-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <div>
        <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
        <ul>
          <li><a href="#" className="hover:text-gray-400 transition duration-300 ease-in-out">Inicio</a></li>
          <li><a href="#" className="hover:text-gray-400 transition duration-300 ease-in-out">Acerca de</a></li>
          <li><a href="#" className="hover:text-gray-400 transition duration-300 ease-in-out">Servicios</a></li>
          <li><a href="#" className="hover:text-gray-400 transition duration-300 ease-in-out">Contacto</a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-4">Contacto</h3>
        <p>Dirección: 123 Calle Principal, Ciudad</p>
        <p>Teléfono: +123 456 789</p>
        <p>Email: info@ejemplo.com</p>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-4">Redes Sociales</h3>
        <ul>
          <li><a href="#" className="hover:text-gray-400 transition duration-300 ease-in-out">Facebook</a></li>
          <li><a href="#" className="hover:text-gray-400 transition duration-300 ease-in-out">Twitter</a></li>
          <li><a href="#" className="hover:text-gray-400 transition duration-300 ease-in-out">Instagram</a></li>
          <li><a href="#" className="hover:text-gray-400 transition duration-300 ease-in-out">LinkedIn</a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-4">Mensaje</h3>
        <p>Dejanos un mensaje</p>
        <form className="mt-4">
          <input type="email" placeholder="aqui :D" className="block w-full px-4 py-2 rounded-md bg-pink-50 text-black" />
          <button type="submit" className="mt-2 bg-pink-50 hover:bg-pink-100 text-black font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out">Suscribirse</button>
        </form>
      </div>
    </div>
  </div>
</footer>
    )
}