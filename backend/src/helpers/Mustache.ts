import Mustache from "mustache";
import Contact from "../models/Contact";

export const greeting = (): string => {
  const greetings = ["Buena Madrugada", "Buen Día", "Buenas Tardes", "Buenas Noches"];
  const h = new Date().getHours();
  // eslint-disable-next-line no-bitwise
  return greetings[(h / 6) >> 0];
};

export default (body: string, contact: Contact): string => {
  let ms = "";

  const Hr = new Date();

  const dd: string = `0${Hr.getDate()}`.slice(-2);
  const mm: string = `0${Hr.getMonth() + 1}`.slice(-2);
  const yy: string = Hr.getFullYear().toString();
  const hh: number = Hr.getHours();
  const min: string = `0${Hr.getMinutes()}`.slice(-2);
  const ss: string = `0${Hr.getSeconds()}`.slice(-2);

  if (hh >= 6) {
    ms = "Buen Día";
  }
  if (hh > 11) {
    ms = "Buenas Tardes";
  }
  if (hh > 17) {
    ms = "Buenas Noches";
  }
  if (hh > 23 || hh < 6) {
    ms = "Buena Madrugada";
  }

  const protocol = yy + mm + dd + String(hh) + min + ss;

  const hora = `${hh}:${min}:${ss}`;

  const view = {
    name: contact ? contact.name : "",
    gretting: greeting(),
    ms,
    protocol,
    hora
  };
  return Mustache.render(body, view);
};