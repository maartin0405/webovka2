import React from "react";
import CZ from "../images/CZ.svg";
import GB from "../images/GB.svg";
import styled from "@emotion/styled";
import getLangKey from "../utils/intl/getLangKey";
import { VALID_LANG_KEYS, DEFAULT_LANG_KEY } from "../utils/intl/LANG_KEYS.js";

const StyledButton = styled.button`
  border: none;
  outline: none;
  padding: 0;
  height: auto;
  background-color: transparent;
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const LanguageSwitcher = () => {
  const handleLangSwitch = (event, lang) => {
    event.preventDefault();
    const url = window.location.pathname;
    const currentLang = getLangKey(url, VALID_LANG_KEYS, DEFAULT_LANG_KEY);
    const newUrl = url.replace("/" + currentLang + "/", "/" + lang + "/");
    window.location.replace(newUrl);
  };

  return (
    <div style={{ width: "100%", textAlign: "right" }}>
      <StyledButton onClick={(event) => handleLangSwitch(event, "cs")}>
        <img src={CZ} alt="Czech" />
      </StyledButton>
      <StyledButton onClick={(event) => handleLangSwitch(event, "en")}>
        <img src={GB} alt="English" />
      </StyledButton>
    </div>
  );
};

export default LanguageSwitcher;
