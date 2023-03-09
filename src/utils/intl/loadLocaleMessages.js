const loadLocaleMessage = (locale) => {
  switch (locale) {
    case "cs":
      return import("../../../lang/cs/common.json");
    case "en":
    default:
      return import("../../../lang/en/common.json");
  }
};

export default loadLocaleMessage;
