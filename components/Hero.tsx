import React from "react";

const Hero = () => {
  return (
    <header className="w-screen h-screen">
      <div className="flex flex-col items-center max-w-3xl">
        <h1 className="text-4xl font-display">Hello</h1>
        <p className="text-xl text-primary"></p>
        <button className="px-8 py-4 rounded-xl bg-secondary text-primary text-xl">
          Zamów teraz!
        </button>
      </div>
    </header>
  );
};

export default Hero;
