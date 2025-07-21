import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <header className="w-screen h-screen relative text-primary grid place-items-center p-6">
      <div className="flex flex-col items-center justify-center text-center max-w-2xl gap-6 z-10">
        <h1 className="text-5xl lg:text-6xl font-display leading-normal font-semibold">
          Poczój się jak w domu przy każdym łyku
        </h1>
        <p className="text-xl">
          Komfortowa pauza w twoim dniu gdzie dobry smak spotyka zdrowie i
          samopoczucie
        </p>
        <button className="px-8 py-4 rounded-xl bg-secondary text-xl hover:bg-primary transition-all duration-200 hover:text-black active:scale-95">
          Wynajmij nas!
        </button>
      </div>
      <Image
        width={1500}
        height={800}
        src="/img/hero1.jpg"
        alt="Coffe table and coffe beans"
        className="absolute top-0 left-0 w-screen h-screen object-cover brightness-70"
      />
    </header>
  );
};

export default Hero;
