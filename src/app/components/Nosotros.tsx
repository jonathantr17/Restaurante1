import { FaApple, FaUtensils, FaHandshake } from 'react-icons/fa';
import Image from "next/image";
import nosotrosImage from "@/assets/fondo.avif";

export default function SobreNosotros() {
  return (
    <section className="bg-white py-20 px-6 md:px-20 font-serif" id="sobre-nosotros">
      {/* Título */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold text-[#C75B12] uppercase tracking-wider drop-shadow-md">
          Sobre Nosotros
        </h2>
        <p className="text-gray-500 mt-3 font-light">
          Conócenos más y descubre nuestra historia y pasión por la comida.
        </p>
      </div>

      {/* Imagen y texto principal */}
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Imagen */}
        <div className="flex-1">
          <Image
            src={nosotrosImage}
            alt="Sobre Nosotros"
            className="rounded-2xl shadow-lg object-cover w-full h-[400px]"
          />
        </div>

        {/* Texto */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-[#C75B12] mb-6 drop-shadow-md">
            Nuestra Historia
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            En <span className="font-semibold text-[#C75B12]">Picantería Carchi</span> 
            mantenemos viva la tradición de la cocina pastuza, preparando cada plato
            con ingredientes frescos y recetas transmitidas de generación en generación.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Nuestro plato estrella, el <span className="font-semibold">Hornado Pastuzo</span>, 
            se acompaña de mote, llapingachos y ají casero que hacen honor a nuestras raíces.  
            Queremos que cada visita sea una experiencia única de sabor y cultura.
          </p>
          <button className="bg-[#1B3A2A] hover:bg-[#154227] text-white font-bold px-8 py-3 rounded-lg shadow-md transition-transform transform hover:scale-105">
            Conócenos Más
          </button>
        </div>
      </div>

      {/* Valores */}
      <div className="mt-20 text-center">
        <h3 className="text-3xl font-bold text-[#C75B12] mb-8">Nuestros Valores</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-20">
          <div className="p-6 bg-[#1B3A2A] rounded-lg shadow-lg text-white">
            <FaApple className="text-4xl mb-4 mx-auto" />
            <h4 className="font-bold text-xl mb-2">Tradición</h4>
            <p className="text-gray-300">Recetas transmitidas de generación en generación.</p>
          </div>
          <div className="p-6 bg-[#1B3A2A] rounded-lg shadow-lg text-white">
            <FaUtensils className="text-4xl mb-4 mx-auto" />
            <h4 className="font-bold text-xl mb-2">Calidad</h4>
            <p className="text-gray-300">Ingredientes frescos y locales en cada plato.</p>
          </div>
          <div className="p-6 bg-[#1B3A2A] rounded-lg shadow-lg text-white">
            <FaHandshake className="text-4xl mb-4 mx-auto" />
            <h4 className="font-bold text-xl mb-2">Sabor</h4>
            <p className="text-gray-300">Recetas auténticas con un toque especial.</p>
          </div>
          <div className="p-6 bg-[#1B3A2A] rounded-lg shadow-lg text-white">
            <FaApple className="text-4xl mb-4 mx-auto" />
            <h4 className="font-bold text-xl mb-2">Servicio</h4>
            <p className="text-gray-300">Atención cercana y amable a cada cliente.</p>
          </div>
        </div>
      </div>

      {/* Misión y Visión */}
      <div className="mt-20 container mx-auto px-6 md:px-20 text-center">
        <h3 className="text-3xl font-bold text-[#C75B12] mb-8">Misión y Visión</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-[#F9F9F9] p-6 rounded-lg shadow-md">
            <h4 className="font-bold text-2xl mb-4 text-[#1B3A2A]">Misión</h4>
            <p className="text-gray-700">
              Ofrecer a nuestros clientes una experiencia auténtica de la gastronomía del Carchi.
            </p>
          </div>
          <div className="bg-[#F9F9F9] p-6 rounded-lg shadow-md">
            <h4 className="font-bold text-2xl mb-4 text-[#1B3A2A]">Visión</h4>
            <p className="text-gray-700">
              Ser reconocidos como el mejor restaurante de cocina tradicional pastuza en la región.
            </p>
          </div>
        </div>
      </div>

      {/* Frase destacada */}
      <div className="mt-20 text-center px-4 md:px-20">
        <blockquote className="italic text-xl text-gray-700">
          “En cada hornado servimos una historia, un sabor y una tradición.”
        </blockquote>
        <p className="mt-4 font-semibold text-[#C75B12]">— Picantería Carchi</p>
      </div>
    </section>
  );
}