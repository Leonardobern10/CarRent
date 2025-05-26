import type { ReactElement } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";
import { Card, CardContent } from "../ui/card";
import type { CarrouselProps } from "@/model/props/CarrouselProps";
import { motion } from "motion/react";

export default function Carrousel<T>({
  items,
  renderItem,
  height,
}: CarrouselProps<T>): ReactElement {
  return (
    <Carousel
      opts={{ align: "start" }}
      className={`border-red-500 h-${height ? height : "fit"} lg:w-full md:p-8`}
    >
      <CarouselContent>
        {items.map((item, index) => (
          <CarouselItem
            key={index}
            className="lg:basis-1/2 basis-1/1 h-fit w-fit "
          >
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ ease: "backOut", duration: 1.3 }}
              className="md:p-4"
            >
              <Card>
                <CardContent className="flex aspect-square items-center justify-between p-1 md:p-8">
                  {renderItem(item, index)}
                </CardContent>
              </Card>
            </motion.div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
