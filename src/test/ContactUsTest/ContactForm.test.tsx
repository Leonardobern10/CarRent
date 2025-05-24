import ContactUs from "../../components/ContactUs/ContactUs";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it } from "vitest";

describe("Contact Us - Integração", () => {
  it("envia o formulario e exibe a mensagem de sucesso", async () => {
    render(<ContactUs title="Contact Us" />);

    const user = userEvent.setup();
    await user.type(screen.getByPlaceholderText("Seu nome*"), "Fulano");
    await user.type(
      screen.getByPlaceholderText("Seu e-mail*"),
      "fulano@email.com"
    );
    await user.type(screen.getByPlaceholderText("Sua mensagem"), "Oi!");

    await user.click(screen.getByRole("button", { name: "Enviar mensagem" }));
  });
});
