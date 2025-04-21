export default function NavModal({ isOpen, onClose }) {
    return (
      <nav
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/70 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="bg-blue-200 rounded-2xl shadow-2xl flex flex-col items-center space-y-6 w-[300px] xl:w-[400px] relative p-4">
        <button
            onClick={onClose}>
              <img src="/images/iconCerrar.png" alt="Close" className="w-6 h-6 absolute -top-6 right-0" />
          </button>
          <a href="#about" onClick={onClose} className="text-lg text-blue-900 hover:text-indigo-900 transition duration-200 font-medium border-b-2 border-blue-900 pb-2 w-full text-center pb-[24px]">
            About
          </a>
          <a href="#projects" onClick={onClose} className="text-lg text-blue-900 hover:text-indigo-900 transition duration-200 font-medium border-b-2 border-blue-900 pb-2 w-full text-center pb-[24px]">
            Proyectos
          </a>
          <a href="#contact" onClick={onClose} className="text-lg text-blue-900 hover:text-indigo-900 transition duration-200 font-medium border-b-2 border-blue-900 pb-2 w-full text-center pb-[24px]">
            Contacto
          </a>
          <a href="https://drive.google.com/file/d/1c25MNAgDIEKuA0ZAcqPf-Kw8yzRqaOud/view?usp=sharing" onClick={onClose} className="text-lg text-blue-900 hover:text-indigo-900 transition duration-200 font-medium mb-[20px]">
            Curriculum
          </a>
        </div>
      </nav>
    );
  }
  