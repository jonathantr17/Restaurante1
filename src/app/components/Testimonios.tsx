"use client";

const reviews = [
  {
    name: "María López",
    text: "La comida estuvo deliciosa y la atención excelente. Definitivamente regresaré.",
    rating: 4,
  },
  {
    name: "Juan Pérez",
    text: "El ambiente es acogedor y los platos tienen un sabor único. Muy recomendado.",
    rating: 5,
  },
  {
    name: "Ana Torres",
    text: "Excelente servicio, rapidez en la entrega y platos muy bien preparados.",
    rating: 4,
  },
  {
    name: "Carlos Medina",
    text: "Un lugar increíble, con platos únicos y un trato excelente.",
    rating: 5,
  },
  {
    name: "Lucía Gómez",
    text: "Me encantó todo, desde la entrada hasta el postre. ¡Volveré!",
    rating: 5,
  },
];

export default function TestimonialsSlider() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Lo que dicen nuestros clientes
        </h2>

        {/* Carrusel */}
        <div className="overflow-hidden relative">
          <div className="flex animate-slide gap-8">
            {reviews.concat(reviews).map((review, idx) => (
              <div
                key={idx}
                className="bg-gray-50 p-6 rounded-lg shadow-lg w-80 flex-shrink-0"
              >
                <p className="text-gray-600 italic mb-4">"{review.text}"</p>
                <p className="text-gray-800 font-semibold mb-2">
                  — {review.name}
                </p>
                <div className="flex justify-center text-yellow-400">
                  {"★".repeat(review.rating)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animación */}
      <style jsx>{`
        .animate-slide {
          display: flex;
          animation: slide 20s linear infinite;
        }

        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}