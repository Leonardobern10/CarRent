import BookNow from "../../components/Book/BookNow";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

// mock IntersectionObserver (caso precise ainda)
describe("BookNow", () => {
  const cities = ["São Paulo", "Rio"];
  const carTypes = ["SUV", "Sedan"];

  it("renderiza título, selects e botão corretamente", () => {
    render(<BookNow cities={cities} carTypes={carTypes} />);

    // Título da seção
    expect(screen.getByText(/reserve agora/i)).toBeInTheDocument();

    // Botão
    expect(
      screen.getByRole("button", { name: /reserve já/i })
    ).toBeInTheDocument();
  });
});
