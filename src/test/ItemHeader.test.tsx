// ItemHeader.test.tsx
import { render, screen } from "@testing-library/react";
import { describe, it, vi, expect } from "vitest";
import { IoHomeOutline } from "react-icons/io5";
import ItemHeader from "../components/App/Header/ItemHeader";
import useWindowWidth from "../hooks/useWindowWidth";

// 🔁 Mock do hook useWindowWidth
vi.mock("../hooks/useWindowWidth", () => ({
  default: vi.fn(),
}));

describe("ItemHeader", () => {
  it("renderiza o texto passado via props", () => {
    (useWindowWidth as any).mockReturnValue(1200); // Simula largura grande
    render(<ItemHeader value="Home" icon={IoHomeOutline} />);
    expect(screen.getByText("Home")).toBeInTheDocument();
  });

  it("exibe o ícone quando largura da tela é menor que 1024", () => {
    (useWindowWidth as any).mockReturnValue(800); // Simula mobile
    render(<ItemHeader value="Início" icon={IoHomeOutline} />);
    // Ícone renderizado dentro do aria-label
    expect(screen.getByLabelText("Página inicial")).toBeInTheDocument();
  });

  it("não exibe o ícone quando largura da tela é maior ou igual a 1024", () => {
    (useWindowWidth as any).mockReturnValue(1280); // Simula desktop
    render(<ItemHeader value="Início" icon={IoHomeOutline} />);
    expect(screen.queryByLabelText("Página inicial")).not.toBeInTheDocument();
  });
});
