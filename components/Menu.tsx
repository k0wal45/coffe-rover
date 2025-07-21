"use client";
import React, { useState } from "react";
import SectionTitle from "./reuseable/SectionTitle";
import Image from "next/image";

const Menu = () => {
  const [category, setCategory] = useState(0);

  return (
    <section
      id="menu"
      className="w-full px-4 lg:px-8 py-12 flex flex-col gap-12 items-center bg-primary"
    >
      <SectionTitle title="Nasze Menu" />

      <div className="flex flex-col lg:flex-row gap-8">
        {/* menu */}
        <div className="flex flex-col gap-6 text-secondary">
          <div className="w-full flex">
            {menu.map((item, index) => (
              <button
                className={`w-24 flex justify-center items-center px-4 py-2 border-solid border-secondary ${
                  category === index &&
                  menu[category].category === item.category
                    ? "border-b-3"
                    : "border-b-1"
                }`}
                key={index}
                onClick={() => setCategory(index)}
              >
                {item.category}
              </button>
            ))}
          </div>

          {menu[category].items.map((item, index) => (
            <div className="flex justify-between" key={index}>
              <div className="flex flex-col">
                <p className="text-xl font-semibold">{item.name}</p>
                <p>{item.description}</p>
              </div>

              <p className="text-2xl font-semibold w-16 bg-white aspect-square rounded-full grid place-items-center whitespace-nowrap">
                {item.price}
              </p>
            </div>
          ))}
        </div>
        {/* img */}
        <div className="relative flex items-center">
          <Image
            width={500}
            height={500}
            src="/img/coffe.jpg"
            alt="kawa"
            className="absolute translate-x-1/3 w-60 lg:w-72 aspect-square object-cover rounded-xl"
          />

          <Image
            width={500}
            height={500}
            src="/img/coffe2.jpg"
            alt="kawa"
            className="w-40 lg:w-60 h-60 object-cover rounded-xl"
          />

          <Image
            width={500}
            height={500}
            src="/img/coffe3.jpg"
            alt="kawa"
            className="w-40 lg:w-60 h-60 object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Menu;

const menu = [
  {
    category: "Kawa",
    items: [
      {
        name: "Espresso",
        description: "Klasyczne, intensywne espresso",
        price: "8 zł",
      },
      {
        name: "Latte",
        description: "Delikatna kawa z mlekiem",
        price: "12 zł",
      },
      {
        name: "Cappuccino",
        description: "Zbalansowane z pianką mleczną",
        price: "11 zł",
      },
    ],
  },
  {
    category: "Napoje",
    items: [
      {
        name: "Lemoniada cytrynowa",
        description: "Orzeźwiająca, na bazie świeżych cytryn",
        price: "10 zł",
      },
      {
        name: "Herbata mrożona",
        description: "Domowa, z miętą i cytryną",
        price: "9 zł",
      },
      {
        name: "Woda gazowana/niegazowana",
        description: "Butelkowana",
        price: "5 zł",
      },
    ],
  },
  {
    category: "Słodko",
    items: [
      {
        name: "Brownie",
        description: "Wilgotne czekoladowe ciasto",
        price: "7 zł",
      },
      {
        name: "Cynamonka",
        description: "Drożdżówka z cynamonem",
        price: "6 zł",
      },
      {
        name: "Croissant",
        description: "Francuski rogalik z masłem",
        price: "7 zł",
      },
    ],
  },
  {
    category: "Słono",
    items: [
      {
        name: "Kanapka z halloumi",
        description: "Z grillowanym serem, rukolą i sosem",
        price: "14 zł",
      },
      {
        name: "Wrap z hummusem",
        description: "Wegetariański z warzywami",
        price: "13 zł",
      },
      {
        name: "Mini quiche",
        description: "Z warzywami i serem",
        price: "10 zł",
      },
    ],
  },
];
