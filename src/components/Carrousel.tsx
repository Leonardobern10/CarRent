import type { ReactElement } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import { Card, CardContent } from "./ui/card";
import client1 from "../assets/images/client1.png";
import client2 from "../assets/images/client2.png";
import client3 from "../assets/images/client3.png";
import client4 from "../assets/images/client4.png";
import client5 from "../assets/images/client5.png";

export default function Carrousel(): ReactElement {
  const times = [
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
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full "
    >
      <CarouselContent>
        {times.map((el, index) => (
          <CarouselItem key={index} className="md:basis-1/2 h-fit">
            <div className="p-4">
              <Card>
                <CardContent className="flex aspect-square items-center justify-between p-6">
                  {/*Criação de um componente para poder renderizar conteudos
                  diferentes*/}
                  <span className="h-6/7 w-full flex flex-col justify-evenly items-center ">
                    <div className="h-35 w-35">
                      <img
                        className="rounded-full h-full w-full"
                        src={el.image}
                        alt={`foto do client ${el.name}`}
                      />
                    </div>
                    <div>
                      <p className="text-xl font-semibold">{el.name}</p>
                    </div>
                    <div className="w-5/6 text-sm/relaxed text-black-medium/70">
                      <p className="text-center">{el.rate}</p>
                    </div>
                  </span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
