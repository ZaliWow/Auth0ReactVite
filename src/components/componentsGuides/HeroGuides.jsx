


export function HeroGuides({bgImage, content}) {
    return(
        <div className={`hero min-h-screen ${bgImage}` }    >
        <div className="hero-content flex-col lg:flex-row">
          <img src="/images/guiasBakend.webp" className="max-w-md  shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Bienvenido a las guías <a className="text-white">{content.title}</a> </h1>
            <p className="py-6 text-2xl">{content.description}</p>
            <a
                className="block min-w-32 max-w-32 text-center rounded-full border border-pink-600 bg-gradient-to-r from-pink-500 via-blue-500 to-purple-600  py-3 text-2xl font-medium text-white  focus:outline-none focus:ring active:text-opacity-75 sm:w-auto hover:bg-white "
                href="#" 
              >
             Ver guías
              </a>
          </div>
        </div>
      </div>
    )
}