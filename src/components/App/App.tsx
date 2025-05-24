import { Routes, Route } from "react-router";
import Header from "../../components/App/Header";
import { dataNavBarItems } from "../../data/dataNavBarItems";
import Footer from "../App/Footer";
import { dataContact } from "../../data/dataContact";
import Home from "../../pages/Home";
import Sobre from "../../pages/Sobre";
import Reservas from "../../pages/Reservas";
import Carros from "../../pages/Carros";
import Contatos from "../../pages/Contatos";

export default function App() {
  return (
    <div className="flex flex-col justify-between items-center min-h-screen">
      <Header navBarItems={dataNavBarItems} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/reservas" element={<Reservas />} />
        <Route path="/sobre" element={<Carros />} />
        <Route path="/sobre" element={<Contatos />} />
      </Routes>
      <Footer dataContact={dataContact} />
    </div>
  );
}
