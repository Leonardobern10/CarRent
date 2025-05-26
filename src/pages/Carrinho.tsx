import type { ReactElement } from "react";
import car1 from "../assets/images/jeep_1.png";

const cartItems = [
  {
    id: 2,
    name: "Jeep Renegade",
    category: "SUV",
    image: car1,
    pickupDate: "2025-06-02",
    returnDate: "2025-06-04",
    pricePerDay: 220,
    days: 2,
  },
];

export default function Carrinho(): ReactElement {
  const total = cartItems.reduce(
    (acc, item) => acc + item.pricePerDay * item.days,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 w-screen mt-20 p-10">
      <h1 className="text-3xl font-bold mb-6">Seu Carrinho</h1>

      {cartItems.length === 0 ? (
        <p className="text-lg text-gray-600">Seu carrinho está vazio.</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Lista de itens */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white p-4 rounded-lg shadow flex items-center gap-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-40 h-40 object-contain"
                />
                <div className="flex-1">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-sm text-gray-500">{item.category}</p>
                  <p className="text-sm mt-1">
                    Retirada:{" "}
                    <span className="font-medium">{item.pickupDate}</span>
                  </p>
                  <p className="text-sm">
                    Entrega:{" "}
                    <span className="font-medium">{item.returnDate}</span>
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-base font-bold">
                    R$ {item.pricePerDay * item.days}
                  </p>
                  <button className="text-red-600 text-sm mt-2 hover:underline">
                    Remover
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Resumo */}
          <div className="bg-white p-6 rounded-lg shadow h-fit">
            <h3 className="text-xl font-semibold mb-4">Resumo</h3>
            <p className="flex justify-between mb-2">
              <span>Total de dias:</span>
              <span>
                {cartItems.reduce((acc, item) => acc + item.days, 0)} dias
              </span>
            </p>
            <p className="flex justify-between mb-4">
              <span>Total:</span>
              <span className="font-bold text-orange-primary">R$ {total}</span>
            </p>
            <button className="w-full bg-orange-primary hover:bg-orange-700 text-white py-2 px-4 rounded transition">
              Finalizar Reserva
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
