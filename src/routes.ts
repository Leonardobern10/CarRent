import type { RouteType } from "./model/types/RouteType";
import Carrinho from "./pages/Carrinho";
import Carros from "./pages/Carros";
import Contatos from "./pages/Contatos";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";

export const routes: Array<RouteType> = [
  { id: 0, path: "/", element: Home },
  { id: 1, path: "/sobre", element: Sobre },
  { id: 2, path: "/carrinho", element: Carrinho },
  { id: 3, path: "/carros", element: Carros },
  { id: 4, path: "/contatos", element: Contatos },
];
