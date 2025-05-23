import IconNetwork from "../components/shared/IconNetwork";
import { render, screen } from "@testing-library/react";
import { IoAddCircleSharp } from "react-icons/io5";
import { describe, expect, it } from "vitest";

describe("IconNetwork", () => {
  it("renderiza o ícone corretamente", () => {
    render(<IconNetwork icon={IoAddCircleSharp} />);
    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  it("aplica estilos corretos quando footer é TRUE", () => {
    const { container } = render(
      <IconNetwork icon={IoAddCircleSharp} footer={true} />
    );

    const li = container.querySelector("li")!;
    expect(li.className).toMatch(/h-8/);
    expect(li.className).toMatch(/w-8/);
    expect(li.className).toMatch(/rounded-lg/);
  });

  it("aplica estilos corretos quando footer é FALSE", () => {
    const container = render(<IconNetwork icon={IoAddCircleSharp} />);
    const li = container.baseElement.querySelector("li");

    expect(li?.className).toMatch(/h-8/);
    expect(li?.className).toMatch(/w-8/);
    expect(li?.className).toMatch(/rounded-\[5px\]/);
  });

  it("tem classes de hover e transição", () => {
    const { container } = render(<IconNetwork icon={IoAddCircleSharp} />);
    const li = container.querySelector("li")!;
    expect(li.className).toMatch(/hover:scale-110/);
    expect(li.className).toMatch(/hover:transition-transform/);
  });
});
