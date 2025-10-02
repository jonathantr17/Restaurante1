"use client";

import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1B3A2A] text-white pt-12 pb-6 font-serif">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        
        {/* Logo / Nombre */}
        <div>
          <h2 className="text-2xl font-bold text-[#C75B12] mb-4">
            Picantería Carchi
          </h2>
          <p className="text-gray-300 mb-4">
            Sabores auténticos del Carchi con tradición pastuza.  
            Ven y disfruta de una experiencia única.
          </p>

          {/* Redes Sociales */}
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="https://www.facebook.com/picanteriacarchi1973/?locale=es_LA"
              target="_blank"
              className="hover:text-[#C75B12] transition-colors"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://www.instagram.com/picanteriacarchi/"
              target="_blank"
              className="hover:text-[#C75B12] transition-colors"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://wa.me/593998437329"
              target="_blank"
              className="hover:text-[#C75B12] transition-colors"
            >
              <FaWhatsapp size={20} />
            </a>
          </div>
        </div>

        {/* Enlaces */}
        <div>
          <h3 className="text-2xl font-semibold text-[#C75B12] mb-4">Enlaces</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="#home" className="hover:text-[#C75B12] border-b border-transparent hover:border-[#C75B12] transition-all">
                Inicio
              </a>
            </li>
            <li>
              <a href="#menu" className="hover:text-[#C75B12] border-b border-transparent hover:border-[#C75B12] transition-all">
                Menú
              </a>
            </li>
            <li>
              <a href="#sobre-nosotros" className="hover:text-[#C75B12] border-b border-transparent hover:border-[#C75B12] transition-all">
                Sobre Nosotros
              </a>
            </li>
            <li>
              <a href="#contacto" className="hover:text-[#C75B12] border-b border-transparent hover:border-[#C75B12] transition-all">
                Contacto
              </a>
            </li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="text-2xl font-semibold text-[#C75B12] mb-4">Contacto</h3>
          <p className="text-gray-300">machala n58-91 y Nicolas Vélez, Quito, Ecuador</p>
          <p className="text-gray-300">0998437329</p>
          <p className="text-gray-300">picanteriacarchi@hotmail.com</p>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="text-center text-gray-400 mt-10 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} Picantería Carchi. Todos los derechos reservados.
      </div>
    </footer>
  );
}