import React from "react";
import SectionTitle from "./reuseable/SectionTitle";
import Image from "next/image";

const About = () => {
  return (
    <div
      id="about"
      className="w-full p-4 lg:p-8 bg-primary flex flex-col gap-4 items-center justify-center"
    >
      <p className="text-lg text-center">Dowiedz się więcej o nas</p>
      <SectionTitle title="Nasza historia" />

      <div className="max-w-6xl flex flex-col lg:flex-row gap-4 items-center justify-center">
        <div className="relative flex-1 w-full max-w-sm">
          <Image
            width={600}
            height={600}
            loading="lazy"
            src="/img/coffe2.jpg"
            alt="Coffe cup"
            className="w-3/4 aspect-square object-cover z-10 rounded-xl before:z-0 before:w-3/4 before:absolute before:-bottom-1/2 before:left-0 before:bg-secondary"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
