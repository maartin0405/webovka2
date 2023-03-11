import React from "react";
import CZ from "../../images/CZ.svg";
import GB from "../../images/GB.svg";
import styled from "@emotion/styled";
import { Link as GatsbyLink } from "gatsby";

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
  return (
    <div style={{ width: "100%", textAlign: "right" }}>
      <StyledLink to={`/cs/${currentUrl}`}>
        <img src={CZ} alt="Czech" />
      </StyledLink>
      <StyledLink to={`/en/${currentUrl}`}>
        <img src={GB} alt="English" />
      </StyledLink>
    </div>
  );
};

export default LanguageSwitcher;
