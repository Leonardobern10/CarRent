import CarAd from "../components/FeaturedCars/CarAd";
import { allDataCars } from "../data/dataCarAd";
import type { ReactElement } from "react";

export default function Carros(): ReactElement {
  return (
    <div className="my-20 font-poppins">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Filtro lateral */}
        <aside className="md:col-span-1">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold mb-4">Filtros</h2>
            <label className="block mb-2 text-sm font-medium">Marca</label>
            <select className="w-full border px-3 py-2 mb-4 text-sm rounded">
              <option>Todas</option>
              {allDataCars.map((el) => (
                <option>{el.brand}</option>
              ))}
            </select>
            <label className="block mb-2 text-sm font-medium">Tipo</label>
            <select className="w-full border px-3 py-2 mb-4 text-sm rounded">
              <option>Todas</option>
              <option>SUV</option>
              <option>Hatch</option>
              <option>Sedan</option>
            </select>
            <label className="block mb-2 text-sm font-medium">Preço até</label>
            <input type="range" min="50" max="500" className="w-full" />
            <p className="text-sm mt-2 text-gray-600">Até R$ 500/dia</p>
          </div>
        </aside>

        {/* Cards de carros */}
        <section className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allDataCars.map((el) => (
            <CarAd
              border={true}
              icons={el.labels}
              carName={el.name}
              image={el.image}
              dailyRate={el.dailyRate}
            />
          ))}
        </section>
      </main>
    </div>
  );
}
