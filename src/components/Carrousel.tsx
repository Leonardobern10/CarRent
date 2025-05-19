import type { ReactElement } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import { Card, CardContent } from "./ui/card";
import type { CarrouselProps } from "@/model/CarrouselProps";

export default function Carrousel<T>({
  items,
  renderItem,
}: CarrouselProps<T>): ReactElement {
  return (
    <Carousel opts={{ align: "start" }} className="w-4/6 md:w-full">
      <CarouselContent>
        {items.map((item, index) => (
          <CarouselItem key={index} className="md:basis-1/2 basis-1/1 h-fit ">
            <div className="md:p-4">
              <Card>
                <CardContent className="flex aspect-square items-center justify-between p-4 md:p-6">
                  {renderItem(item, index)}
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
