import type { DATA_ABOUTUS } from "../model/types/DataAboutUsType";
import AboutDescription from "../components/AboutUs/AboutDescription";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

const resizeTo = (width: number) => {
  window.innerWidth = width;
  window.dispatchEvent(new Event("resize"));
};

const testClass = (width: number, classes: string | Array<string>) => {
  resizeTo(width);

  const props: DATA_ABOUTUS = { TEXT: "Texto de teste" };
  const { container } = render(<AboutDescription data={props} />);

  // Seleciona o parágrafo que contém o texto
  const p = container.querySelector("p");

  // Valida se a classe esperada está presente
  if (typeof classes === "string") {
    expect(p?.className).toContain(classes);
  } else {
    classes.forEach((el) => expect(p?.className).toContain(el));
  }
};

describe("AboutDescription", () => {
  it("renderiza corretamente o texto", () => {
    const props: DATA_ABOUTUS = { TEXT: "Texto de teste" };
    render(<AboutDescription data={props} />);
    expect(screen.getByText("Texto de teste")).toBeInTheDocument();
  });

  it("estilo correto para dispositivos mobile", () => {
    // Simula tela mobile
    testClass(500, "text-md/6");
  });
  it("estilo correto para dispositivos laptop", () => {
    testClass(1080, ["text-lg/6", "text-left"]);
  });

  it("estilo correto para dispositivos desktop", () => {
    testClass(1400, "text-xl/10");
  });
});
