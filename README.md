# 🚗 CarRent - Plataforma de Aluguel de Carros

**CarRent** é uma aplicação web moderna e responsiva para aluguel de carros. Desenvolvida com foco em **experiência do usuário**, **componentização escalável** e **boas práticas de desenvolvimento**, simula o fluxo completo de uma locadora digital: da descoberta do veículo à reserva.

[🔗 Acesse o projeto em produção](https://car-rent-eta-lemon.vercel.app)

## 🧪 Tech Stack

| Frontend | Estilo | Testes | Outros |
|----------|--------|--------|--------|
| React.js + TypeScript | TailwindCSS + ShadCN UI | Cypress, Vitest | Vite, ESLint, Prettier |

> O projeto segue os princípios de Clean Code, SOLID e responsividade mobile-first.

## 📸 Demonstração

![CarRent Demo](https://user-images.githubusercontent.com/yourusername/demo-carrent.gif)


## ✨ Funcionalidades

- Listagem de carros disponíveis
- Filtro por marca/modelo/cidade
- Página de detalhes do carro
- Processo de reserva com seleção de cidade e datas
- Design responsivo (mobile, tablet e desktop)
- Animações suaves e feedback visual
- Testes end-to-end com Cypress
- Deploy contínuo com Vercel

## 🧠 Aprendizados

Durante o desenvolvimento do CarRent, aprofundei conhecimentos em:

- Arquitetura de componentes reutilizáveis
- Acessibilidade e boas práticas de UI/UX
- Utilização do TailwindCSS para construção rápida de UI
- Escrita de testes e2e com Cypress
- Versionamento e deploy automatizado

## 🚀 Instalação local

```bash
# Clone o repositório
git clone https://github.com/Leonardobern10/CarRent.git
cd CarRent

# Instale as dependências
npm install

# Execute o projeto
npm run dev
````

## 🧪 Rodando os testes E2E

```bash
# Abra o Cypress em modo interativo
npx cypress open

# Ou execute no terminal (headless)
npx cypress run
```

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── ui/                 # Base UI com ShadCN
│   └── CarCard.tsx         # Exibição de carros
├── pages/
│   ├── Home.tsx
│   ├── Booking.tsx         # Página de reservas
│   └── Contact.tsx         # Página de contato
├── assets/
├── App.tsx
├── main.tsx
```

## 🧑‍💻 Autor

Desenvolvido com 💙 por **\[Leonardo Bernardo]**

* [LinkedIn](https://www.linkedin.com/in/leonardobernardo-dev)
* [Portfólio](https://portfolio-leonardo25.vercel.app/)
* [GitHub](https://github.com/Leonardobern10)



