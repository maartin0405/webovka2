import React from "react";
import styled from "@emotion/styled";

const Button = ({ children, fill }) => {
  const StyledButton = styled.button`
    width: ${({ fill }) => (fill ? "100%" : "auto")};
  `;
  return <StyledButton fill={fill}>{children}</StyledButton>;
};

export default Button;