export default function Footer() {
    return (
        <footer id="contact" className="bg-gray-800 text-white p-4">
            <div className="container mx-auto text-center">
                <div className="flex justify-center space-x-6 m-4 pt-4 md:pt-8 lg:space-x-12">
                    <a href="https://www.linkedin.com/in/luisamariaseguro/" className="text-gray-400 hover:text-white">
                        <img src="/images/icons8-linkedin-64.png" alt="LinkedIn" className="w-8 h-8 md:w-12 md:h-12" />
                    </a>
                    <a href="https://github.com/LuisaMSegur" className="text-gray-400 hover:text-white">
                        <img src="/images/icons8-github-64.png" alt="GitHub" className="w-8 h-8 md:w-12 md:h-12" />
                    </a>
                    <a href="https://www.instagram.com/luisa_maria_seguro/?igsh=MWdlbG5nYTMwZzdweg%3D%3D#" className="text-gray-400 hover:text-white">
                        <img src="/images/icons8-instagram-64.png" alt="Instagram" className="w-8 h-8 md:w-12 md:h-12" />
                    </a>
                </div>
            <p className="text-[8px] pt-8 text-blue-200 md:text-[12px] md:pt-12 md:flex">&copy; 2025 Luisa Maria Seguro Rodriguez.</p>
            </div>
        </footer>
    );
}