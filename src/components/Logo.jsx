import React from "react";
import mainLogo from "../images/logo.svg";
import styled from "@emotion/styled";

const StyledLogo = styled.img`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Logo = ({ width }) => {
  return <StyledLogo width={width} src={mainLogo} />;
};

export default Logo;
