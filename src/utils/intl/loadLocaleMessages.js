const loadLocaleMessage = (locale) => {
  switch (locale) {
    case "cs":
      return import("../../../locales/cs/common.json");
    case "en":
    default:
      return import("../../../locales/en/common.json");
  }
};

export default loadLocaleMessage;
