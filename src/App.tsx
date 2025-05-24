import { Routes, Route } from "react-router";
import Header from "./components/Presentation/Header";
import { dataNavBarItems } from "./data/dataNavBarItems";
import Footer from "./components/Footer/Footer";
import { dataContact } from "./data/dataContact";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="flex flex-col justify-between items-center">
      <Header navBarItems={dataNavBarItems} />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer dataContact={dataContact} />
    </div>
  );
}
