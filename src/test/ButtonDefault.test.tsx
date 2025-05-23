import ButtonDefault from "../components/shared/ButtonDefault";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import type { ButtonDefaultProps } from "@/model/props/ButtonDefaultProps";

describe("Button", () => {
  it("renderiza com o texto correto", () => {
    render(<ButtonDefault buttonName="Enviar" />);
    expect(screen.getByText("Enviar")).toBeInTheDocument();
  });

  it("aplica classes padrão quando não recebe props opcionais", () => {
    render(<ButtonDefault buttonName="Botão" />);
    const button = screen.getByText("Botão");

    expect(button).toHaveClass("text-sm"); // fontSize padrão
    expect(button).toHaveClass("font-normal"); // weight não definido (problema a melhorar)
    expect(button).toHaveClass("text-black-medium"); // color não definido (problema a melhorar)
    expect(button).toHaveClass("w-fit"); // width não definido (problema a melhorar)
    expect(button).toHaveClass("h-fit"); // height não definido (problema a melhorar)
  });

  it("aplica classes dinâmicas conforme as props", () => {
    const props: ButtonDefaultProps = {
      buttonName: "Testar",
      fontSize: "lg",
      weight: "bold",
      color: "red-500",
      width: "40",
      height: "10",
    };

    render(<ButtonDefault {...props} />);
    const button = screen.getByText("Testar");

    expect(button).toHaveClass("text-lg");
    expect(button).toHaveClass("font-bold");
    expect(button).toHaveClass("text-red-500");
    expect(button).toHaveClass("w-40");
    expect(button).toHaveClass("h-10");
  });
});
