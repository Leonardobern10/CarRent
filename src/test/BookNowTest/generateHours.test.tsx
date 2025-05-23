import { describe, expect, it } from "vitest";
import generateHours from "../../service/generateHours";

describe("generateHours", () => {
  it("deve retornar um array com os horários de 08:00 até 20:00", () => {
    const result = generateHours();

    // Verifica o tamanho do array
    expect(result).toHaveLength(13);

    // Verifica se começa em 08:00 e termina em 20:00
    expect(result[0]).toBe("08:00");
    expect(result[result.length - 1]).toBe("20:00");

    // Verifica todos os itens do array
    const expected = [
      "08:00",
      "09:00",
      "10:00",
      "11:00",
      "12:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00",
      "18:00",
      "19:00",
      "20:00",
    ];
    expect(result).toEqual(expected);
  });

  it("deve garantir que todos os elementos estão no formato HH:00", () => {
    const result = generateHours();
    for (const hour of result) {
      expect(hour).toMatch(/^\d{2}:00$/);
    }
  });
});
