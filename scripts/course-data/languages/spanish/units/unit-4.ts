import { buildSpanishUnit } from "../helpers";

export const unit4 = buildSpanishUnit({
  title: "Unit 4",
  description: "Use Spanish adjectives, colors, and descriptions",
  lessons: [
    {
      title: "Colors",
      items: [
        { source: "red", target: "rojo", alt: ["azul", "verde", "blanco"] },
        { source: "blue", target: "azul", alt: ["rojo", "negro", "amarillo"] },
        { source: "green", target: "verde", alt: ["blanco", "azul", "gris"] },
        { source: "yellow", target: "amarillo", alt: ["verde", "rojo", "negro"] },
      ],
    },
    {
      title: "Descriptions",
      items: [
        { source: "big", target: "grande", alt: ["pequeno", "nuevo", "bueno"] },
        { source: "small", target: "pequeno", alt: ["grande", "malo", "viejo"] },
        { source: "new", target: "nuevo", alt: ["viejo", "alto", "bajo"] },
        { source: "old", target: "viejo", alt: ["nuevo", "joven", "grande"] },
      ],
    },
    {
      title: "People and feelings",
      items: [
        { source: "happy", target: "feliz", alt: ["triste", "cansado", "ocupado"] },
        { source: "sad", target: "triste", alt: ["feliz", "facil", "rapido"] },
        { source: "tired", target: "cansado", alt: ["feliz", "nuevo", "lento"] },
        { source: "busy", target: "ocupado", alt: ["triste", "libre", "facil"] },
      ],
    },
  ],
});
