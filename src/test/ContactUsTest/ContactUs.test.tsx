import ContactUs from "../../components/ContactUs/ContactUs";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

const titleTest = "Titulo de teste.";
const buttonName = "Enviar mensagem";

describe("ContactUs", () => {
  it("renderiza corretamente o componente <TitleSection />", () => {
    render(<ContactUs title={titleTest} />);
    expect(screen.getByText(titleTest)).toBeInTheDocument();
  });

  it("renderiza o formulário com as classes esperadas", () => {
    render(<ContactUs title={titleTest} />);
    const form = screen.getByTestId("contact-form");

    const expectedClasses = [
      "w-full",
      "h-fit",
      "lg:h-5/6",
      "lg:w-1/2",
      "flex",
      "flex-col",
      "justify-center",
      "items-center",
      "gap-y-10",
    ];

    expectedClasses.forEach((cls) => {
      expect(form.className).toContain(cls);
    });
  });

  it("renderiza os campos do formulário corretamente", () => {
    render(<ContactUs title={titleTest} />);
    expect(screen.getByPlaceholderText("Seu nome*")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Seu e-mail*")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Sua mensagem")).toBeInTheDocument();
  });

  it("renderiza o botão de envio", () => {
    render(<ContactUs title={titleTest} />);
    expect(
      screen.getByRole("button", { name: buttonName })
    ).toBeInTheDocument();
  });

  it("renderiza a imagem da seção", () => {
    render(<ContactUs title={titleTest} />);
    const img = screen.getByRole("img");
    expect(img).toBeInTheDocument();
  });
});
