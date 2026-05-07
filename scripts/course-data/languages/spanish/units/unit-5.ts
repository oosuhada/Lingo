import { buildSpanishUnit } from "../helpers";

export const unit5 = buildSpanishUnit({
  title: "Unit 5",
  description: "Learn useful Spanish phrases for real situations",
  lessons: [
    {
      title: "Polite phrases",
      items: [
        { source: "please", target: "por favor", alt: ["gracias", "perdon", "hola"] },
        { source: "thank you", target: "gracias", alt: ["por favor", "adios", "si"] },
        { source: "excuse me", target: "perdon", alt: ["gracias", "no", "buenas noches"] },
        { source: "you are welcome", target: "de nada", alt: ["perdon", "hola", "hasta luego"] },
      ],
    },
    {
      title: "Travel basics",
      items: [
        { source: "Where is it?", target: "Donde esta?", alt: ["Cuanto cuesta?", "Que hora es?", "Como estas?"] },
        { source: "How much is it?", target: "Cuanto cuesta?", alt: ["Donde esta?", "Quien es?", "Que es?"] },
        { source: "I need help", target: "Necesito ayuda", alt: ["Tengo hambre", "Quiero agua", "Estoy bien"] },
        { source: "I do not understand", target: "No entiendo", alt: ["No tengo", "No quiero", "No voy"] },
      ],
    },
    {
      title: "Daily needs",
      items: [
        { source: "I want water", target: "Quiero agua", alt: ["Tengo agua", "Bebo pan", "Leo agua"] },
        { source: "I am hungry", target: "Tengo hambre", alt: ["Tengo frio", "Estoy feliz", "Soy hambre"] },
        { source: "I am tired", target: "Estoy cansado", alt: ["Tengo cansado", "Soy cansado", "Voy cansado"] },
        { source: "See you later", target: "Hasta luego", alt: ["Buenos dias", "De nada", "Por favor"] },
      ],
    },
  ],
});
