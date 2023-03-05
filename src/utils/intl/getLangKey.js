const getLangKey = (url, validKeys, defaultKey) => {
  const langKey = url.split("/")[1];
  if (!validKeys.includes(langKey)) {
    return defaultKey;
  }
  return langKey;
};

export default getLangKey;
