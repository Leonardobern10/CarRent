import type { RateType } from "../model/types/RateType";
import client1 from "../assets/images/client1.png";
import client2 from "../assets/images/client2.png";
import client3 from "../assets/images/client3.png";
import client4 from "../assets/images/client4.png";
import client5 from "../assets/images/client5.png";

const dataRating: Array<RateType> = [
  {
    image: client1,
    name: "Roberto N. Carlos",
    rate: "Excelente experiência! A reserva foi super rápida, o carro estava em perfeito estado e o processo de retirada e devolução foi simples. Com certeza vou alugar novamente por aqui.",
  },
  {
    image: client2,
    name: "Maicon Rogério",
    rate: "Achei a plataforma fácil de usar e o carro atendeu bem às minhas necessidades. No entanto, o valor da diária poderia ser um pouco mais competitivo em comparação com outras opções no mercado.",
  },
  {
    image: client3,
    name: "Isabela Rodrigues",
    rate: "Tive um imprevisto com o horário de devolução e o suporte foi super atencioso e resolutivo. Atendimento nota 10! Recomendo a todos que buscam praticidade e segurança.",
  },
  {
    image: client4,
    name: "Lúcia Menezes da Silva",
    rate: "Gostei bastante da variedade de modelos disponíveis e das opções de preço. Encontrei exatamente o tipo de carro que precisava para a viagem. Só senti falta de mais filtros na busca para facilitar a escolha.",
  },
  {
    image: client5,
    name: "Rogerio Lisboa",
    rate: "Plataforma super intuitiva! Consegui comparar preços, escolher o carro ideal e finalizar a reserva em poucos minutos. A retirada foi rápida e o veículo estava limpo e em ótimas condições. Muito prático!",
  },
];

export default dataRating;
