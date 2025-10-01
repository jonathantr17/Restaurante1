import React from "react";
import Image from "next/image";

// Importar imágenes
import hornado from "@/assets/platos/hornado.webp";
import fritada from "@/assets/platos/fritada.jpg";
import caldo from "@/assets/platos/caldo.webp";
import llapingacho from "@/assets/platos/llapingacho.jpeg";
import seco from "@/assets/platos/seco.jpg";
import cuy from "@/assets/platos/cuy.jpg";

interface Platillo {
  nombre: string;
  precio: string;
  descripcion: string;
  imagen: any;
}

const Menu: React.FC = () => {
  const platillos: Platillo[] = [
    {
      nombre: "Hornado Pastuzo",
      precio: "$6.50",
      descripcion:
        "Carne de cerdo jugosa al horno, acompañada de mote, llapingachos y ensalada fresca.",
      imagen: hornado,
    },
    {
      nombre: "Fritada",
      precio: "$5.50",
      descripcion:
        "Clásica fritada ecuatoriana con mote, tostado, maduro frito y ensalada criolla.",
      imagen: fritada,
    },
    {
      nombre: "Caldo de Gallina",
      precio: "$4.00",
      descripcion:
        "Sopa tradicional de gallina criolla con papas, hierbitas y huevo duro.",
      imagen: caldo,
    },
    {
      nombre: "Llapingachos con Chorizo",
      precio: "$5.00",
      descripcion:
        "Tortillas de papa rellenas de queso, servidas con chorizo, huevo frito y ensalada.",
      imagen: llapingacho,
    },
    {
      nombre: "Seco de Pollo",
      precio: "$5.50",
      descripcion:
        "Pollo guisado en salsa de cerveza y especias, acompañado de arroz y aguacate.",
      imagen: seco,
    },
    {
      nombre: "Cuy Asado (por encargo)",
      precio: "$15.00",
      descripcion:
        "Delicioso cuy asado con papas, mote y ají casero. (Pedido anticipado).",
      imagen: cuy,
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-16" id="menu">
      {/* Título con estilo */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#C75B12] uppercase tracking-wider drop-shadow-md">
          Nuestro Menú
        </h2>
        <p className="text-gray-500 mt-3 font-light">
          Platos típicos con el auténtico sabor del Carchi y tradición pastuza.
        </p>
      </div>

      {/* Grid de platillos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {platillos.map((platillo, index) => (
          <div
            key={index}
            className="bg-[#1B3A2A] bg-opacity-95 text-white rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            {/* Imagen del plato */}
            <Image
              src={platillo.imagen}
              alt={platillo.nombre}
              className="w-full h-48 object-cover"
            />

            {/* Contenido */}
            <div className="p-6 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-2xl font-bold text-[#C75B12] mb-2 font-serif tracking-wide">
                  {platillo.nombre}
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  {platillo.descripcion}
                </p>
              </div>

              {/* Precio y botón */}
              <div className="flex items-center justify-between mt-4">
                <span className="text-xl font-bold text-[#C75B12]">
                  {platillo.precio}
                </span>
                <button className="px-4 py-2 bg-[#C75B12] hover:bg-[#A14A0F] rounded-lg font-semibold text-sm transition-colors shadow-md">
                  Pedir
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;