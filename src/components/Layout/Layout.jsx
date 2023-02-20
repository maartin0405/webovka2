import React from "react";
import "../../styles/global.css";
import styled from "@emotion/styled";

const StyledDiv = styled.div`
  padding-bottom: 137px;
`;

const Layout = ({ children }) => {
  return <StyledDiv>{children}</StyledDiv>;
};

export default Layout;
