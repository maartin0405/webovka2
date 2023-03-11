import React from "react";
import CZ from "../../images/CZ.svg";
import GB from "../../images/GB.svg";
import styled from "@emotion/styled";
import { Link as GatsbyLink } from "gatsby";
import getLangKey from "../../utils/intl/getLangKey";
import { VALID_LANG_KEYS, DEFAULT_LANG_KEY } from "../../utils/intl/LANG_KEYS";

const StyledLink = styled(GatsbyLink)`
  border: none;
  padding: 0;
  height: auto;
  background-color: transparent;
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 10px;
  }
`; //the link is weirdly moved down for whatever reason idk why

const LanguageSwitcher = () => {
  const currentUrl =
    typeof window !== "undefined"
      ? window.location.pathname.split("/").slice(2).join("/")
      : "";

  const url = typeof window !== "undefined" ? window.location.pathname : "";
  const currentLangKey = getLangKey(url, VALID_LANG_KEYS, DEFAULT_LANG_KEY);

  const linkUrl =
    currentLangKey === "cs" ? `/en/${currentUrl}` : `/cs/${currentUrl}`;
  const flagImage = currentLangKey === "cs" ? GB : CZ;

  return (
    <div style={{ width: "100%", textAlign: "right" }}>
      <StyledLink to={linkUrl}>
        <img src={flagImage} />
      </StyledLink>
    </div>
  );
};

export default LanguageSwitcher;
