import { buildSpanishUnit } from "../helpers";

export const unit3 = buildSpanishUnit({
  title: "Unit 3",
  description: "Practice common Spanish verbs and daily actions",
  lessons: [
    {
      title: "Daily verbs",
      items: [
        { source: "to eat", target: "comer", alt: ["beber", "leer", "vivir"] },
        { source: "to drink", target: "beber", alt: ["comer", "escribir", "ir"] },
        { source: "to read", target: "leer", alt: ["mirar", "hablar", "dormir"] },
        { source: "to write", target: "escribir", alt: ["leer", "correr", "tener"] },
      ],
    },
    {
      title: "Movement",
      items: [
        { source: "to go", target: "ir", alt: ["venir", "estar", "ser"] },
        { source: "to come", target: "venir", alt: ["ir", "hacer", "decir"] },
        { source: "to run", target: "correr", alt: ["caminar", "comer", "leer"] },
        { source: "to walk", target: "caminar", alt: ["correr", "dormir", "beber"] },
      ],
    },
    {
      title: "Useful actions",
      items: [
        { source: "to speak", target: "hablar", alt: ["escuchar", "mirar", "abrir"] },
        { source: "to listen", target: "escuchar", alt: ["hablar", "cerrar", "tener"] },
        { source: "to look", target: "mirar", alt: ["leer", "escuchar", "vivir"] },
        { source: "to open", target: "abrir", alt: ["cerrar", "mirar", "decir"] },
      ],
    },
  ],
});
