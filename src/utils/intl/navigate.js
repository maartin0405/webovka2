import { navigate as gatsbyNavigate } from "gatsby";
import getLangKey from "./getLangKey";
import { VALID_LANG_KEYS, DEFAULT_LANG_KEY } from "./LANG_KEYS";

const navigate = (path) => {
  const url = typeof window !== "undefined" ? window.location.pathname : "";

  const langKey = getLangKey(url, VALID_LANG_KEYS, DEFAULT_LANG_KEY);

  const newPath = `/${langKey}${path}`;

  return gatsbyNavigate(newPath);
};

export default navigate;
