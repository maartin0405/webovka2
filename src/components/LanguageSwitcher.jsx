import React from "react";
import CZ from "C:/Users/marti/Documents/GitHub/webovka2/src/images/CZ.svg";
import GB from "C:/Users/marti/Documents/GitHub/webovka2/src/images/GB.svg";
import styled from "@emotion/styled";

const LanguageSwitcher = () => {
  const StyledButton = styled.button`
    border: none;
    outline: none;
    padding: 0;
    &:not(:last-child) {
      margin-right: 10px;
    }
  `;
  return (
    <div style={{ width: "100%", textAlign: "right" }}>
      <StyledButton>
        <img src={CZ} alt="Czech" />
      </StyledButton>
      <StyledButton>
        <img src={GB} alt="English" />
      </StyledButton>
    </div>
  );
};

export default LanguageSwitcher;
