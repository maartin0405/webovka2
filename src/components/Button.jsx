import React from "react";
import styled from "@emotion/styled";

const Button = ({ text }) => {
  const StyledButton = styled.button`
    width: 100%;
  `;
  return <StyledButton>{text}</StyledButton>;
};

export default Button;
