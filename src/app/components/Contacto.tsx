"use client";

import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

export default function Contactanos() {
  return (
    <section className="bg-[#F9F9F9] py-20 px-6 md:px-20 font-serif" id="contactanos">
      {/* Título */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold text-[#C75B12] uppercase tracking-wider drop-shadow-md">
          Contáctanos
        </h2>
        <p className="text-gray-500 mt-3 font-light">
          Escríbenos, llámanos o visítanos. Queremos escucharte.
        </p>
      </div>

      {/* Contenido */}
      <div className="container mx-auto flex flex-col md:flex-row gap-12">
        
        {/* Formulario */}
        <div className="flex-1 bg-white p-8 rounded-2xl shadow-lg">
          <form className="space-y-6">
            <div>
              <label className="block mb-2 font-semibold text-gray-700">Nombre</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#C75B12]"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold text-gray-700">Correo electrónico</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#C75B12]"
                placeholder="correo@ejemplo.com"
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold text-gray-700">Mensaje</label>
              <textarea
                className="w-full border border-gray-300 rounded-lg px-4 py-2 h-32 focus:outline-none focus:border-[#C75B12]"
                placeholder="Escribe tu mensaje aquí..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#C75B12] hover:bg-[#A14A0F] text-white font-bold px-6 py-3 rounded-lg shadow-md transition-transform transform hover:scale-105"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>

        {/* Información de contacto */}
        <div className="flex-1 space-y-8">
          <div className="bg-[#1B3A2A] p-8 rounded-2xl shadow-lg text-white">
            <h3 className="text-2xl font-bold mb-6">Información</h3>
            <div className="flex items-center mb-4">
              <FiMapPin className="text-[#C75B12] w-6 h-6 mr-4" />
              <span>Calle Principal #123, Cotopaxi, Ecuador</span>
            </div>
            <div className="flex items-center mb-4">
              <FiPhone className="text-[#C75B12] w-6 h-6 mr-4" />
              <span>+593 987 654 321</span>
            </div>
            <div className="flex items-center">
              <FiMail className="text-[#C75B12] w-6 h-6 mr-4" />
              <span>info@picanteriacarchi.com</span>
            </div>
          </div>

          {/* Mapa (opcional) */}
          <div className="w-full h-64 rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.512913933835!2d-78.61933408522588!3d-0.9410498999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d4d3c8f7f7c3db%3A0xa1b1b1b1b1b1b1b1!2sCotopaxi%2C%20Ecuador!5e0!3m2!1ses-419!2sus!4v1696029117711!5m2!1ses-419!2sus"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              className="border-0"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}