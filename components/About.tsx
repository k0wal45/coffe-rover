import React from "react";
import SectionTitle from "./reuseable/SectionTitle";
import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="w-full p-4 lg:p-8 bg-primary flex flex-col gap-4 items-center justify-center"
    >
      <p className="text-lg text-center">Dowiedz się więcej o nas</p>
      <SectionTitle title="Nasza historia" />

      <div className="max-w-5xl flex flex-col lg:flex-row gap-8 items-center justify-center p-4">
        <div className="relative flex-1 w-full h-[23rem] flex justify-end items-end ">
          <Image
            width={600}
            height={600}
            loading="lazy"
            src="/img/coffe2.jpg"
            alt="Coffe cup"
            className="absolute left-0 top-0 w-3/4 max-h-3/4 max-w-[23rem] aspect-square object-cover z-30 rounded-xl shadow-2xl"
          />
          <Image
            width={600}
            height={600}
            loading="lazy"
            src="/img/coffe3.jpg"
            alt="Coffe cup"
            className=" w-3/4 max-h-3/4 max-w-[23rem] aspect-square object-cover z-20 rounded-xl shadow-2xl"
          />
          <div className="w-2/3 lg:w-72  aspect-square rounded-full bg-secondary absolute top-0 right-0 z-10"></div>
          <div className="w-2/3 lg:w-72  aspect-square rounded-xl bg-amber-200 absolute bottom-6 left-6 z-10"></div>
        </div>

        <div className="flex-1 flex flex-col gap-6 w-full text-lg text-secondary">
          <p>
            Coffee Rover to mobilna kawiarnia, która przemierza ulice Śląska, by
            serwować aromatyczną kawę tam, gdzie właśnie jej potrzebujesz. Nasza
            przygoda zaczęła się od miłości do kawy i wolności - połączyliśmy
            pasję z ruchem i tak powstał kawowy van, który znajdziesz na
            targach, eventach, festynach czy po prostu pod Twoim biurem.
            Serwujemy kawę speciality przygotowaną z dbałością o każdy detal -
            od starannie wyselekcjonowanych ziaren, przez odpowiednie metody
            parzenia, aż po serce, które wkładamy w każdą filiżankę. Nie mamy
            stałego adresu - to my do Ciebie przyjeżdżamy. Śledź nas na
            Instagramie i sprawdź, gdzie pojawimy się następnym razem!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
