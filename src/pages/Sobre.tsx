import type { ReactElement } from "react";
import leader from "../assets/images/leader_photo.png";
import Rating from "../components/Rating/Rating";
import dataRating from "../data/dataRating";

export default function Sobre(): ReactElement {
  return (
    <div className="text-neutral-800 mt-16 w-full">
      {/* Hero Section */}
      <section className="bg-orange-primary py-16 px-6 lg:px-32 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">
          Mobilidade sem limites
        </h1>
        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
          Tornamos o aluguel de carros fácil, acessível e confiável para todos.
        </p>
      </section>

      {/* Quem somos */}
      <section className="py-16 px-6 lg:px-32 max-w-5xl mx-auto lg:gap-x-20 gap-y-10 flex flex-col lg:flex-row justify-between ">
        <div className="w-full lg:w-280 h-full lg:h-80">
          <img
            className="w-full h-full object-cover rounded-2xl shadow-2xl"
            src={leader}
            alt="Imagens de nosso funcionarios"
          />
        </div>
        <div>
          <h2 className="text-3xl font-semibold mb-4">Quem somos</h2>
          <p className="text-neutral-700 leading-relaxed">
            A <strong>CarRent</strong> nasceu com o objetivo de transformar a
            forma como as pessoas alugam carros. Com uma frota moderna e um
            processo totalmente digital, oferecemos liberdade, praticidade e
            segurança para quem deseja ir mais longe.
          </p>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16  px-6 lg:px-32">
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
      {/*<section className="py-16 px-6 lg:px-32 max-w-7xl mx-auto">
        <Rating data={dataRating} />
      </section>*/}

      {/* CTA */}
      <section className="py-16 bg-black-medium text-white text-center px-6">
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
