import { page1_aboutMessages } from "./1_about";
import { page2_projectMessages } from "./2_project";
import { page3_infoMessages } from "./3_info";
import { page4_businessSportsMessages } from "./4_businessSports";
import { page5_partnersMessages } from "./5_partners";
import { page6_contactsMessages } from "./6_contacts";

export type Translation = [string, string, string, string];

const translations: Translation[] = [
  ...page1_aboutMessages,
  ...page2_projectMessages,
  ...page3_infoMessages,
  ...page4_businessSportsMessages,
  ...page5_partnersMessages,
  ...page6_contactsMessages,
];

export const getMessages = (lang: "en" | "ro" | "ru") => {
  const messages: Record<string, string> = {};

  const idx = lang === "en" ? 1 : lang === "ro" ? 2 : 3;

  translations.forEach((translation) => {
    messages[translation[0]] = translation[idx];
  });

  return messages;
};
