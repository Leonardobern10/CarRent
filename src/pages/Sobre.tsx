import type { ReactElement } from "react";

export default function Sobre(): ReactElement {
  return (
    <div className="bg-white text-neutral-800">
      {/* Hero Section */}
      <section className="bg-gray-100 py-16 px-6 lg:px-32 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">
          Mobilidade sem limites
        </h1>
        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
          Tornamos o aluguel de carros fácil, acessível e confiável para todos.
        </p>
      </section>

      {/* Quem somos */}
      <section className="py-16 px-6 lg:px-32 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Quem somos</h2>
        <p className="text-neutral-700 leading-relaxed">
          A <strong>CarRent</strong> nasceu com o objetivo de transformar a
          forma como as pessoas alugam carros. Com uma frota moderna e um
          processo totalmente digital, oferecemos liberdade, praticidade e
          segurança para quem deseja ir mais longe.
        </p>
      </section>

      {/* Diferenciais */}
      <section className="py-16 bg-gray-50 px-6 lg:px-32">
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
      <section className="py-16 px-6 lg:px-32 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10 text-center">
          O que dizem nossos clientes
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              name: "Fernanda R.",
              city: "RJ",
              message:
                "Alugar um carro nunca foi tão fácil. Tudo funcionou perfeitamente!",
            },
            {
              name: "Carlos M.",
              city: "SP",
              message:
                "Usei a CarRent em uma viagem de negócios e fiquei impressionado com a agilidade!",
            },
          ].map((testimonial, i) => (
            <div
              key={i}
              className="bg-white p-6 border-l-4 border-primary rounded-md shadow-sm"
            >
              <p className="italic mb-2">“{testimonial.message}”</p>
              <p className="font-semibold">
                — {testimonial.name}, {testimonial.city}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white text-center px-6">
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
