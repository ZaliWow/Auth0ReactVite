export function AboutMe(params) {
    return(
      <div className="py-20">
      <div className="max-w-4x2 lg:px-40 px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Acerca de mí</h2>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="lg:w-auto mb-8 lg:mb-0">
            <img src="/images/DevID.webp" alt="Tu Foto" className="w-full rounded-lg shadow-lg" />
          </div>
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">¡Hola! Soy David morales.</h3>
            <p className="text-lg text-gray-600 mb-4">Desde mi infancia, siempre me ha apasionado el deporte y la computación. Esta pasión me ha llevado a explorar la programación de diversas maneras, desde mecanicas de video juegos hasta convertirme en ingeniero de sistemas.</p>
            <p className="text-lg text-gray-600 mb-4">En este blog, comparto mis reflexiones, conocimientos y experiencias sobre el desarrollo frontend. Mi objetivo es compartir mis conocimientos y proyectos personales, y espero inspirar y motivar a otros a través de mis palabras.</p>
            <p className="text-lg text-gray-600 mb-4">Cuando no estoy escribiendo, me puedes encontrar Tiktok, Linkedin, Github. Me encanta el fútbol y pasar tiempo con la familia.</p>
            <p className="text-lg text-gray-600 mb-4">¡Gracias por visitar mi blog! Si quieres ponerte en contacto conmigo, no dudes en enviarme un mensaje a través de morales.william@correounivalle.edu.co.</p>
          </div>
        </div>
      </div>
    </div>
    )
}