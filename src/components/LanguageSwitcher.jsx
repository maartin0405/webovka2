import React from "react";
import CZ from "../images/CZ.svg";
import GB from "../images/GB.svg";
import styled from "@emotion/styled";

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
  const currentLang = window.location.pathname.startsWith("/cs") ? "cs" : "en";
  const handleLangSwitch = (event, lang) => {
    event.preventDefault();
    const path = window.location.pathname;
    const newPath = path.replace("/" + currentLang + "/", "/" + lang + "/");
    window.location.replace(newPath);
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
