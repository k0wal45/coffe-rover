"use client";
import Image from "next/image";
import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="kontakt"
      className="max-w-4xl mx-auto my-12 rounded-2xl shadow-lg bg-white overflow-hidden flex flex-wrap"
    >
      {/* Form Side */}
      <div className="flex-1 min-w-[340px] p-10 flex flex-col justify-center">
        <h2 className="text-secondary mb-2 text-3xl font-bold">
          Skontaktuj się z nami
        </h2>
        <p className="mb-6 text-secondary/80">
          Masz pytania? Wypełnij formularz, a odezwiemy się do Ciebie!
        </p>
        {submitted ? (
          <div className="text-green-600 mt-4 font-semibold text-lg">
            Dziękujemy za wiadomość!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <label className="font-medium text-secondary">
              Imię
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 mt-1 border border-gray-200 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-secondary/40 bg-white text-secondary"
              />
            </label>
            <label className="font-medium text-secondary">
              Email
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 mt-1 border border-gray-200 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-secondary/40 bg-white text-secondary"
              />
            </label>
            <label className="font-medium text-secondary">
              Wiadomość
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-3 py-2 mt-1 border border-gray-200 rounded-md text-base resize-vertical focus:outline-none focus:ring-2 focus:ring-secondary/40 bg-white text-secondary"
              />
            </label>
            <button
              type="submit"
              className="py-3 bg-secondary text-primary font-bold text-lg rounded-md mt-2 shadow hover:bg-secondary/90 transition"
            >
              Wyślij
            </button>
          </form>
        )}
      </div>
      {/* Image Side */}
      <div className="flex-3 min-w-sm min-h-[420px] relative flex items-end p-16">
        <div className="mt-9 p-6 bg-white/70 rounded-lg shadow text-secondary z-10">
          <h3 className="text-secondary mb-2 text-xl font-semibold">
            Dane kontaktowe
          </h3>
          <p className="my-2">
            <span className="font-medium">Email:</span>{" "}
            <a
              href="mailto:kontakt@coffeerover.pl"
              className="text-secondary underline"
            >
              kontakt@coffeerover.pl
            </a>
          </p>
          <p className="my-2">
            <span className="font-medium">Telefon:</span>{" "}
            <a href="tel:+48123456789" className="text-secondary underline">
              +48 123 456 789
            </a>
          </p>
          <p className="my-2">
            <span className="font-medium">Adres:</span> ul. Przykładowa 1,
            00-000 Katowice
          </p>
        </div>
        <Image
          width={600}
          height={600}
          className="w-full h-full absolute top-0 left-0 object-cover"
          src="/img/coffe3.jpg"
          alt="Zdjęcie kawy"
        />
      </div>
    </section>
  );
};

export default Contact;
