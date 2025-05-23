import TitleSection from "../components/shared/TitleSection";
import type { TitleSectionsProps } from "../model/props/TitleSectionProps";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("TitleSection", () => {
  it("renderiza com o texto correto", () => {
    const props: TitleSectionsProps = {
      text: "Texto de teste",
    };
    render(<TitleSection {...props} />);
    expect(screen.getByText("Texto de teste")).toBeInTheDocument();
  });

  it("aplica classes padrão quando não recebe props", () => {
    const props: TitleSectionsProps = {
      text: "Texto de teste",
    };
    render(<TitleSection {...props} />);
    const component = screen.getByText("Texto de teste");
    expect(component).toHaveClass("text-black-medium");
  });

  it("aplica classes dinâmicas conforme as props", () => {
    const props: TitleSectionsProps = {
      text: "Texto de teste",
      white: true,
    };
    render(<TitleSection {...props} />);
    const component = screen.getByText("Texto de teste");
    expect(component).toHaveClass("text-white-dark");
  });
});
