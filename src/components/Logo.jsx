import React from "react";
import mainLogo from "../images/logo.svg";
import styled from "@emotion/styled";
import Link from "./utils/Link";

const StyledLogo = styled.img`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Logo = ({ width }) => {
  return (
    <Link to="/">
      <StyledLogo width={width} src={mainLogo} />
    </Link>
  );
};

Logo.defaultProps = {
  width: "90",
};

export default Logo;
