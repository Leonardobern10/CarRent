import type { SelectComponentProps } from "@/model/types/SelectComponentProps";

export const dataSelectCars: SelectComponentProps[] = (
  carValues: string[],
  timeValues: string[],
) => [
  {
    placeholder: "Tipo de carro",
    selectLabel: "Types",
    value: carValues,
  },
  { placeholder: "Hora de Retirada", selectLabel: "Time", value: timeValues },
  { placeholder: "Hora de Entrega", selectLabel: "Time", value: timeValues },
];
