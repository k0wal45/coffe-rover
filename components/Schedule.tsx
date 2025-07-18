import React from "react";
import SectionTitle from "./reuseable/SectionTitle";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";

const Schedule = () => {
  return (
    <section
      id="about"
      className="w-full bg-primary flex flex-col gap-8 items-center justify-center py-12"
    >
      <div className="px-4 lg:px-8 w-full">
        <SectionTitle title="Nasz Harmonogram" />
      </div>
      <p className="text-lg text-center px-4 lg:px-8 max-w-5xl">
        Gdzie możesz nas znaleźć? Co tydzień odwiedzamy te same miejsca, abyś
        zawsze mógł cieszyć się naszą świeżo parzoną kawą i pysznymi wypiekami.
        Sprawdź nasz harmonogram i dołącz do nas w swojej ulubionej lokalizacji!
      </p>

      <div className="flex flex-col md:grid sm:grid-cols-2 xl:grid-cols-3 w-full">
        {/* card 1 */}
        <div className="relative h-screen lg:h-[70vh] w-full flex items-end pb-24">
          <Image
            width={500}
            height={800}
            src="/img/schedule1.jpg"
            alt="Kawiarnia z kawą"
            className="absolute top-0 left-0 object-cover w-full h-full"
          />
          <div className="w-full px-4 py-4 bg-primary/80 z-10 flex gap-4 justify-between text-secondary translate-y-8">
            <div>
              <div className="font-semibold text-xl">Parkowa przyjemność</div>
              <div>Zapraszamy do parku na kawe i słodycz blisko natury.</div>
              <div className="flex gap-4 items-center mt-2">
                <FaLocationDot />
                Park Śląski, Pola Marsowe
              </div>
            </div>
            <div className="flex flex-col gap-2 font-semibold items-center justify-center bg-white/40 p-4 rounded-xl">
              <p className="text-xl whitespace-nowrap"> Pn - Wt</p>
              <p>9 - 16</p>
            </div>
          </div>
        </div>
        {/* card 2 */}
        <div className="relative h-screen lg:h-[70vh] w-full flex items-end pb-24">
          <Image
            width={500}
            height={800}
            src="/img/schedule2.jpg"
            alt="Kawiarnia z kawą"
            className="absolute top-0 left-0 object-cover w-full h-full"
          />
          <div className="w-full px-4 py-4 bg-primary/80 z-10 flex gap-4 justify-between text-secondary">
            <div>
              <div className="font-semibold text-xl">Poranna kawa</div>
              <div>Zapraszamy na świeżo parzoną kawę i słodkie wypieki.</div>
              <div className="flex gap-4 items-center mt-2">
                <FaLocationDot />
                Katowice Centrum, Plac Wolności
              </div>
            </div>
            <div className="flex flex-col gap-2 font-semibold items-center justify-center bg-white/40 p-4 rounded-xl">
              <p className="text-xl whitespace-nowrap"> Śr - Pt</p>
              <p>6 - 13</p>
            </div>
          </div>
        </div>
        {/* card 3 */}
        <div className="relative h-screen lg:h-[70vh] w-full flex items-end pb-24 sm:col-span-2 xl:col-span-1">
          <Image
            width={500}
            height={800}
            src="/img/schedule3.jpg"
            alt="Kawiarnia z kawą"
            className="absolute top-0 left-0 object-cover w-full h-full"
          />
          <div className="w-full px-4 py-4 bg-primary/80 z-10 flex gap-4 justify-between text-secondary -translate-y-8">
            <div>
              <div className="font-semibold text-xl">Weekend z kawą</div>
              <div>Bieganie, joga i inne ćwiczenia. A później? Kawka!</div>
              <div className="flex gap-4 items-center mt-2">
                <FaLocationDot />
                Dolina 3 stawów
              </div>
            </div>
            <div className="flex flex-col gap-2 font-semibold items-center justify-center bg-white/40 p-4 rounded-xl">
              <p className="text-xl whitespace-nowrap"> Śb - Ndz</p>
              <p>11 - 18</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
