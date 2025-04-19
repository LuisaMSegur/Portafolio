import Image from "next/image";

export default function Main() {
    return (
        <div className="bg-radial-corner">
<section id="about" className="flex flex-col items-center w-full overflow-hidden md:pt-12">
    <Image
        src="/images/perfil.png"
        alt="Foto perfil"
        width={200}
        height={200}
        className="pt-6"
    />
    <h2 className="text-3xl font-montserrat font-[900] text-blue-950 pt-6 md:text-6xl">Mi Historia</h2>
    <p className="text-sm font-montserrat font-sans text-indigo-800 text-center pt-6 px-4 md:text-lg md:p-8 xl:p-24">
    Antes de sumergirme en el mundo de la tecnología, mi vida giraba en torno al arte. Profesión que me enseñó sobre disciplina, creatividad y conexión humana. Por vueltas de la vida, migré de Colombia a Chile, lo que trajo consigo grandes cambios y nuevos desafíos.
En este nuevo camino, descubrí una nueva pasión por el mundo del Desarrollo Web. Recientemente me gradué del Bootcamp de TripleTen, y desde el principio sentí que había encontrado un nuevo escenario en el cual crear, construir y aprender.
Me encanta el Frontend: unir diseño, orden y funcionalidad para crear experiencias digitales atractivas. Siempre he sido muy visual, detallista y curiosa, y disfruto aprender cosas nuevas, estar a la vanguardia y combinar lo técnico con lo artístico.
Además del Desarrollo Web, me interesan los idiomas, y actualmente estoy estudiando inglés para ampliar mis oportunidades y seguir creciendo profesionalmente.
Hoy quiero seguir aprendiendo con especial foco en el Desarrollo Frontend.
    </p>
    <h2 className="text-3xl font-montserrat font-[900] text-blue-950 pt-8 text-center pb-6 md:text-6xl sm:pt-24">Tecnologías y Herramientas</h2>
    <div className="flex flex-wrap justify-center items-center gap-4 p-4 md:gap-8 md:p-24">
        <img src="/images/html.png" alt="HTML" className="w-12 h-12" />
        <img src="/images/css.png" alt="CSS" className="w-12 h-12" />
        <img src="/images/js.png" alt="JavaScript" className="w-12 h-12" />
        <img src="/images/react.png" alt="React" className="w-12 h-12" />
        <img src="/images/vite.js.png" alt="Vite" className="w-12 h-12" />
        <img src="/images/git.png" alt="Git" className="w-12 h-12" />
        <img src="/images/node.png" alt="Nodejs" className="w-12 h-12" />
        <img src="/images/next.png" alt="Nextjs" className="w-12 h-12" />
        <img src="/images/tailwind.png" alt="Tailwind" className="w-12 h-12"/>

   </div>
    </section>
<section id="projects" className="relative w-full overflow-hidden">
    <h2 className="text-4xl font-montserrat font-[900] text-blue-950 pt-8 text-center pb-8 md:text-6xl md:pb-18">Proyectos</h2>
    <ul className="flex flex-col items-center justify-center h-full w-full p-2 gap-4 pb-6 md:flex-row md:flex-wrap md:pb-24 md:mx-auto md:max-w-[768px] xl:max-w-[1280px]">
  <a href="https://project-blog-books-frontend.vercel.app/" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105">
    <li className="flex flex-col items-center justify-center h-full w-[300px] bg-radial-corner border-2 border-blue-950 rounded-lg shadow-lg shadow-blue-950/50 hover:shadow-xl hover:shadow-indigo-500/50 hover:bg-white cursor-pointer transition duration-300">
      <h3 className="text-2xl font-sans font-[700] text-center text-indigo-800 p-6">Va Leyendo</h3>
      <div className="p-4">
        <img src="/images/vaLeyendo.png" alt="library" className="rounded-md h-[160px] w-full" />
      </div>
      <p className="text-sm font-sans font-[500] h-[130px] text-center text-indigo-800 p-2 pb-4 flex items-center">
        Aplicación Frontend creada con Next.js, React, Tailwind y desplegada en Vercel.
      </p>
    </li>
  </a>

  <a href="https://www.luisadev.lat" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105">
    <li className="flex flex-col items-center justify-center h-full w-[300px] bg-radial-corner border-2 border-blue-950 rounded-lg shadow-lg shadow-blue-950/50 hover:shadow-xl hover:shadow-indigo-500/50 hover:bg-white cursor-pointer transition duration-300">
      <h3 className="text-2xl font-sans font-[700] text-center text-indigo-800 p-6">Around World</h3>
      <div className="p-4">
        <img src="/images/around.png" alt="library" className="rounded-md h-[160px] w-full" />
      </div>
      <p className="text-sm font-sans font-[500] h-[130px] text-center text-indigo-800 p-2 pb-4 flex items-center">
        Aplicación Fullstack con register, login y más. Frontend en React + Vite + CSS; Backend con Node.js, Express y MongoDB. Desplegada en Google Cloud.
      </p>
    </li>
  </a>

  <a href="https://luisamsegur.github.io/web_project_library/" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105">
    <li className="flex flex-col items-center justify-center h-full w-[300px] bg-radial-corner border-2 border-blue-950 rounded-lg shadow-lg shadow-blue-950/50 hover:shadow-xl hover:shadow-indigo-500/50 hover:bg-white cursor-pointer transition duration-300">
      <h3 className="text-2xl font-sans font-[700] text-center text-indigo-800 p-6">Biblioteca Triple Peaks</h3>
      <div className="p-4">
        <img src="/images/projectLibrary.png" alt="library" className="rounded-md h-[160px] w-full" />
      </div>
      <p className="text-sm font-sans font-[500] h-[130px] text-center text-indigo-800 p-2 pb-4 flex items-center">
        Aplicación Frontend creada con React, Vite, CSS cascada y desplegada en GitHub pages.
      </p>
    </li>
  </a>

  <a href="https://luisamsegur.github.io/web_project_homeland/" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105">
    <li className="flex flex-col items-center justify-center h-full w-[300px] bg-radial-corner border-2 border-blue-950 rounded-lg shadow-lg shadow-blue-950/50 hover:shadow-xl hover:shadow-indigo-500/50 hover:bg-white cursor-pointer transition duration-300">
      <h3 className="text-2xl font-sans font-[700] text-center text-indigo-800 p-6">Homeland</h3>
      <div className="p-4">
        <img src="/images/homeland.png" alt="library" className="rounded-md h-[160px] w-[265px]" />
      </div>
      <p className="text-sm font-sans font-[500] h-[130px] text-center text-indigo-800 p-2 pb-4 flex items-center">
        Aplicación Frontend creada con HTML y CSS. Desplegada en GitHub Pages.
      </p>
    </li>
  </a>
</ul>  
    </section>
        </div>
    );
}