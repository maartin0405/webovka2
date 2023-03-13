import { navigate as gatsbyNavigate } from "gatsby";
import getLangKey from "./getLangKey";
import { VALID_LANG_KEYS, DEFAULT_LANG_KEY } from "./LANG_KEYS";

const customNavigate = (path) => {
  const url = typeof window !== "undefined" ? window.location.href : "";
  console.log(url);

  const langKey = getLangKey(url, VALID_LANG_KEYS, DEFAULT_LANG_KEY);
  console.log(langKey);

  const newPath = `/${langKey}${path}`;

  gatsbyNavigate(newPath);
  console.log(newPath);
};

export default customNavigate;
