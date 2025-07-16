import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <header className="w-screen h-screen relative text-primary grid place-items-center">
      <div className="flex flex-col items-center max-w-2xl gap-6">
        <h1 className="text-6xl font-display leading-normal font-semibold">
          Poczój się jak w domu przy każdym łyku
        </h1>
        <p className="text-xl">
          Komfortowa pauza w twoim dniu gdzie dobry smak spotyka zdrowie i
          samopoczucie
        </p>
        <button className="px-8 py-4 rounded-xl bg-secondary text-xl hover:bg-primary transition-all duration-200 hover:text-black active:scale-95">
          Zamów teraz!
        </button>
      </div>
      <Image
        width={1920}
        height={1080}
        loading="lazy"
        src="/img/hero1.jpg"
        alt="Coffe table and coffe beans"
        className="absolute top-0 left-0 -z-10 w-screen h-screen object-cover"
      />
    </header>
  );
};

export default Hero;
