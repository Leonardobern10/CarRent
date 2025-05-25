import { Routes, Route } from "react-router";
import Header from "../../components/App/Header";
import { dataNavBarItems } from "../../data/dataNavBarItems";
import Footer from "./Footer";
import { dataContact } from "../../data/dataContact";
import Home from "../../pages/Home";
import Sobre from "../../pages/Sobre";
import Carros from "../../pages/Carros";
import Contatos from "../../pages/Contatos";
import Carrinho from "../../pages/Carrinho";

export default function App() {
  return (
    <div className="flex flex-col justify-between items-center min-h-screen">
      <Header navBarItems={dataNavBarItems} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/carros" element={<Carros />} />
        <Route path="/contatos" element={<Contatos />} />
      </Routes>
      <Footer dataContact={dataContact} />
    </div>
  );
}
