import React from "react";
import styled from "@emotion/styled";

const Button = ({ text, fill }) => {
  const StyledButton = styled.button`
    width: ${({ fill }) => (fill ? "100%" : "auto")};
  `;
  return <StyledButton fill={fill}>{text}</StyledButton>;
};

export default Button;
