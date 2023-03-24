import React from "react";
import styled from "@emotion/styled";
import { Link as GatsbyLink } from "gatsby";
import getLangKey from "../../utils/intl/getLangKey";
import { DEFAULT_LANG_KEY, VALID_LANG_KEYS } from "../../utils/intl/LANG_KEYS";
import CZ from "../../images/CZ.svg";
import GB from "../../images/GB.svg";

const StyledLink = styled(GatsbyLink)`
  border: none;
  padding: 0;
  height: auto;
  background-color: transparent;
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const LanguageSwitcher = () => {
  const currentUrl =
    typeof window !== "undefined"
      ? window.location.pathname.split("/").slice(2).join("/")
      : "";

  const url = typeof window !== "undefined" ? window.location.pathname : "";
  const currentLangKey = getLangKey(url, VALID_LANG_KEYS, DEFAULT_LANG_KEY);

  const languages = [
    { key: "en", flag: GB },
    { key: "cs", flag: CZ },
  ];

  const switcherLinks = languages.map((lang) => {
    if (lang.key === currentLangKey) {
      return null;
    }

    const linkUrl = `/${lang.key}/${currentUrl}`;
    return (
      <StyledLink key={lang.key} to={linkUrl}>
        <img src={lang.flag} alt={lang.key} />
        {lang.name}
      </StyledLink>
    );
  });

  return (
    <div style={{ width: "100%", textAlign: "right" }}>{switcherLinks}</div>
  );
};

export default LanguageSwitcher;
