import React from "react";
import styled from "@emotion/styled";

const Header = ({ children, size }) => {
  const Tag = `h${size}`;
  const StyledTag = styled[Tag]`
    text-transform: lowercase;
    font-family: workSans;
  `;
  return <StyledTag>{children}</StyledTag>;
};

export default Header;
