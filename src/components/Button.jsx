import React from "react";
import styled from "@emotion/styled";

const Button = ({ children, fill, background }) => {
  const StyledButton = styled.button`
    border: none;
    outline: none;
    width: ${({ fill }) => (fill ? "100%" : "auto")};
    background-color: ${background};
    border-radius: 5px;
    color: white;
    padding: 14px 20px;
    font-family: workSans;
    font-size: 15px;
    line-height: 14px;
    cursor: pointer;
    letter-spacing: 0.15px;
  `;
  return <StyledButton fill={fill}>{children}</StyledButton>;
};

export default Button;
