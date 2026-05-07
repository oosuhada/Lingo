import { buildSpanishUnit } from "../helpers";

export const unit6 = buildSpanishUnit({
  title: "Unit 6",
  description: "Build simple Spanish sentences with people, places, and time",
  lessons: [
    {
      title: "Sentence starters",
      items: [
        { source: "I am", target: "yo soy", alt: ["tu eres", "el es", "nosotros somos"] },
        { source: "you are", target: "tu eres", alt: ["yo soy", "ella es", "ellos son"] },
        { source: "he is", target: "el es", alt: ["yo soy", "tu eres", "nosotros somos"] },
        { source: "we are", target: "nosotros somos", alt: ["ellos son", "el es", "tu eres"] },
      ],
    },
    {
      title: "Places",
      items: [
        { source: "at home", target: "en casa", alt: ["en la escuela", "en el parque", "en la tienda"] },
        { source: "at school", target: "en la escuela", alt: ["en casa", "en el parque", "en el trabajo"] },
        { source: "in the park", target: "en el parque", alt: ["en la tienda", "en casa", "en la escuela"] },
        { source: "at work", target: "en el trabajo", alt: ["en casa", "en el parque", "en la tienda"] },
      ],
    },
    {
      title: "Time words",
      items: [
        { source: "today", target: "hoy", alt: ["manana", "ayer", "ahora"] },
        { source: "tomorrow", target: "manana", alt: ["hoy", "ayer", "nunca"] },
        { source: "yesterday", target: "ayer", alt: ["hoy", "ahora", "siempre"] },
        { source: "now", target: "ahora", alt: ["ayer", "manana", "despues"] },
      ],
    },
  ],
});
