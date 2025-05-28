import type { ReactElement } from "react";
import Rating from "../components/Rating/Rating";
import dataRating from "../data/dataRating";
import { sectionsAbout } from "../data/dataSectionsAbout";
import SectionAbout from "../components/shared/SectionAbout";

export default function Sobre(): ReactElement {
  return (
    <div className="text-neutral-800 lg:mt-16 w-full">
      {/* Hero Section */}
      <section className="bg-orange-primary py-16 px-8 lg:px-32 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">
          Mobilidade sem limites
        </h1>
        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
          Tornamos o aluguel de carros fácil, acessível e confiável para todos.
        </p>
      </section>

      {/* Quem somos */}
      {sectionsAbout.map((el) => (
        <SectionAbout
          index={el.index}
          img={el.img}
          title={el.title}
          text={el.text}
          invert={el.invert}
        />
      ))}

      {/* Diferenciais */}
      <section className="py-16  px-10 lg:px-32">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Nossos diferenciais
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { emoji: "🚗", text: "Frota moderna e revisada" },
            { emoji: "💳", text: "Reserva 100% online" },
            { emoji: "🔒", text: "Pagamento seguro" },
            { emoji: "🕐", text: "Suporte 24/7" },
            { emoji: "🌱", text: "Sustentabilidade no transporte" },
            { emoji: "📍", text: "Presença em várias cidades" },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition-all"
            >
              <div className="text-4xl mb-4">{item.emoji}</div>
              <p className="text-neutral-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 px-6 lg:px-32 max-w-7xl mx-auto">
        <Rating data={dataRating} />
      </section>

      {/* CTA */}
      <section className="py-16 bg-black-medium text-white text-center px-10">
        <h2 className="text-3xl font-bold mb-4">
          Pronto para sua próxima viagem?
        </h2>
        <p className="mb-6 text-lg">
          Reserve agora e tenha liberdade para ir onde quiser.
        </p>
        <a
          href="/carros"
          className="bg-white text-primary px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all"
        >
          Ver carros disponíveis
        </a>
      </section>
    </div>
  );
}
