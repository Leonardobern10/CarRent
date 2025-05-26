import type { SectionAboutProps } from "@/model/props/SectionAboutProps";
import leader from "../assets/images/leader_photo.png";
import frota from "../assets/images/patio_carros.png";
import escritorio from "../assets/images/escritorio.png";

export const sectionsAbout: Array<SectionAboutProps> = [
  {
    index: 1,
    title: "Quem somos",
    text: `A CarRent nasceu com o propósito de transformar a experiência de aluguel de veículos no Brasil. Desde o início, nosso foco tem sido reinventar a mobilidade com soluções inteligentes, acessíveis e totalmente digitais. Acreditamos que alugar um carro deve ser tão simples quanto chamar um aplicativo, e por isso desenvolvemos uma plataforma intuitiva, eficiente e segura, que coloca o cliente no centro de tudo.`,
    img: leader,
  },
  {
    index: 2,
    title: "Nossa frota",
    text: `Com uma frota moderna, constantemente atualizada e preparada para atender diferentes perfis e necessidades, proporcionamos liberdade para que nossos usuários possam ir mais longe — seja em uma viagem de negócios, lazer ou no dia a dia. A digitalização de ponta a ponta do nosso processo garante uma jornada sem burocracias, desde a escolha do veículo até a devolução, tudo com poucos cliques.`,
    img: frota,
    invert: true,
  },
  {
    index: 3,
    title: "Nossa equipe",
    text: `Mais do que uma locadora, somos uma empresa de tecnologia em mobilidade, comprometida com a excelência no atendimento, a inovação contínua e a construção de um futuro mais conectado, prático e sustentável. Nosso objetivo é oferecer autonomia e tranquilidade para cada cliente, com a confiança de que estão contando com um serviço ágil, transparente e feito para as pessoas.`,
    img: escritorio,
  },
];
