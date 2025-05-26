import ButtonDefault from "../components/shared/ButtonDefault";
import { useState } from "react";

export default function Contatos() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode integrar com backend ou serviço externo
    alert("Mensagem enviada com sucesso!");
    setForm({ nome: "", email: "", assunto: "", mensagem: "" });
  };

  return (
    <div className="max-w-3xl mx-auto p-6 mt-20">
      <h1 className="text-4xl font-bold mb-2 text-center text-primary">
        Fale Conosco
      </h1>
      <p className="text-center text-neutral-600 mb-8">
        Tem alguma dúvida, sugestão ou deseja fazer uma parceria? Preencha o
        formulário abaixo.
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-md p-6 space-y-6"
      >
        <div>
          <label className="block text-sm font-medium mb-1">Nome</label>
          <input
            type="text"
            name="nome"
            value={form.nome}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-4 py-2"
            placeholder="Seu nome"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">E-mail</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-4 py-2"
            placeholder="seuemail@exemplo.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Assunto</label>
          <input
            type="text"
            name="assunto"
            value={form.assunto}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-4 py-2"
            placeholder="Sobre o que deseja falar?"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Mensagem</label>
          <textarea
            name="mensagem"
            value={form.mensagem}
            onChange={handleChange}
            required
            rows={5}
            className="w-full border border-gray-300 rounded px-4 py-2"
            placeholder="Escreva sua mensagem aqui..."
          ></textarea>
        </div>

        <ButtonDefault
          buttonName={"Enviar mensagem"}
          clickEvent={() => console.log("Clicou")}
        />
      </form>
    </div>
  );
}
