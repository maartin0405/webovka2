import React from "react";
import { Link as GatsbyLink } from "gatsby-link";
import getLangKey from "../../utils/intl/getLangKey";
import { VALID_LANG_KEYS, DEFAULT_LANG_KEY } from "../../utils/intl/LANG_KEYS";

const Link = ({ children, to, ...props }) => {
  const url = typeof window !== "undefined" ? window.location.pathname : "";
  const currentLangKey = getLangKey(url, VALID_LANG_KEYS, DEFAULT_LANG_KEY);
  return (
    <GatsbyLink to={`/${currentLangKey}${to}`} {...props}>
      {children}
    </GatsbyLink>
  );
};

export default Link;
