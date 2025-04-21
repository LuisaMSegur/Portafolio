"use client";
import Image from "next/image";
import NavModal from "../Nav/Nav";
import { useState } from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <header className="relative h-screen w-full overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/FondoInicio.mp4" type="video/mp4" />
          Tu navegador no soporta el video.
        </video>
        <div className="relative z-10 flex flex-col items-start justify-center h-full text-white text-center px-4 md:items-center">
        <button
        onClick={() => setIsOpen(true)}
        className="absolute w-[50px] h-[50px] lg:w-[80px] lg:h-[80px] right-8 top-8 z-20 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out hover:scale-110 hover:opacity-50"
      >
        <Image src="/images/esferaa.png" width={50} height={50} alt="Logo" className="lg:w-[80px] lg:h-[80px]" />
      </button>

      {isOpen && <NavModal isOpen={isOpen} onClose={() => setIsOpen(false)} />}
        
          <h1 className="text-8xl sm:text-9xl font-montserrat font-[900] text-blue-950 pb-6">Hola,</h1>
          <h2 className="text-3xl sm:text-5xl font-sans text-indigo-800">Soy Luisa M. Seguro</h2>
          <h2 className="text-xl sm:text3xl font-montserrat font-sans text-indigo-800">Desarrolladora Frontend</h2>
        </div>
      </header>
    );
  }