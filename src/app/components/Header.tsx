"use client";

import Image from "next/image";
import Link from "next/link";
import { FiHome, FiMenu, FiInfo, FiPhone } from "react-icons/fi";
import pastaImage from "@/assets/logo.png";
import logoImage from "@/assets/logo1.png";
import fondoImage from "@/assets/fondo.avif";

export default function Header() {
  return (
    <header className="relative w-full min-h-screen md:min-h-[70vh] text-white font-serif">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={fondoImage}
          alt="Fondo"
          fill
          className="object-cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-90"></div>
      </div>

      {/* Navbar */}
      <div className="bg-[#1B3A2A] bg-opacity-95 fixed w-full z-20 shadow-lg h-[70px] md:h-[90px] flex items-center">
        <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
          {/* Logo y nombre */}
          <div className="flex items-center space-x-3">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Image
                src={logoImage}
                alt="Logo Picantería Carchi"
                width={38}
                height={38}
                className="object-contain max-w-[38px] md:max-w-[70px]"
              />
            </div>

            {/* Texto */}
            <div className="flex flex-col items-start leading-tight">
              <span className="font-serif font-bold uppercase text-base md:text-2xl text-[#C75B12] tracking-wide">
                Picantería Carchi
              </span>
              <span className="font-serif italic uppercase text-[9px] md:text-sm text-gray-200">
                - Hornado Pastuzo -
              </span>
            </div>
          </div>

          {/* Enlaces desktop */}
          <nav className="hidden md:flex space-x-8 font-semibold text-xl items-center">
            <Link href="#home" className="relative group flex items-center gap-1">
              <FiHome className="text-xl group-hover:text-[#C75B12] transition-colors" />
              <span className="hover:text-[#C75B12] transition-colors">Home</span>
            </Link>

            <Link href="#menu" className="relative group flex items-center gap-1">
              <FiMenu className="text-xl group-hover:text-[#C75B12] transition-colors" />
              <span className="hover:text-[#C75B12] transition-colors">Menu</span>
            </Link>

            <Link
              href="#sobre-nosotros"
              className="relative group flex items-center gap-1"
            >
              <FiInfo className="text-xl group-hover:text-[#C75B12] transition-colors" />
              <span className="hover:text-[#C75B12] transition-colors">
                Sobre Nosotros
              </span>
            </Link>

            <Link
              href="#contactanos"
              className="relative group flex items-center gap-1"
            >
              <FiPhone className="text-xl group-hover:text-[#C75B12] transition-colors" />
              <span className="hover:text-[#C75B12] transition-colors">
                Contacto
              </span>
            </Link>
          </nav>

          {/* Botón hamburguesa móvil */}
          <button className="md:hidden text-3xl text-[#C75B12] focus:outline-none">
            ☰
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-12 px-6 min-h-[70vh] relative z-10 
      pt-[100px] md:pt-[90px]">
        {/* Texto Lado Izquierdo */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="font-serif uppercase text-5xl md:text-5xl tracking-widest text-gray-100 drop-shadow-lg">
            PICANTERIA CARCHI
          </h2>
          <h1 className="font-serif uppercase text-4xl md:text-6xl tracking-wide text-[#C75B12] drop-shadow-lg mt-2">
            Hornado Pastuzo
          </h1>
          <p className="text-gray-300 max-w-md text-lg md:text-xl mt-4 drop-shadow-md mx-auto md:mx-0">
            Fortaleciendo tradiciones con cada bocado.
          </p>
        </div>

        {/* Imagen a la derecha */}
        <div className="flex-1 flex justify-center items-center">
          <Image
            src={pastaImage}
            alt="Imagen decorativa"
            className="object-contain w-[250px] md:w-auto"
            priority
          />
        </div>
      </div>
    </header>
  );
}