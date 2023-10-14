const translations: [string, string, string, string][] = [
  [`testkey`, "enlish", "romana", "ruski"],
];

export const getMessages = (lang: "en" | "ro" | "ru") => {
  const messages: Record<string, string> = {};

  const idx = lang === "en" ? 1 : lang === "ro" ? 2 : 3;

  translations.forEach((translation) => {
    messages[translation[0]] = translation[idx];
  });

  return messages;
};
