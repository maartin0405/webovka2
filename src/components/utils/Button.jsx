import React from "react";
import styled from "@emotion/styled";

const StyledButton = styled.button`
  border: none;
  outline: none;
  width: 100%;
  background-color: ${({ background }) => background};
  border-radius: 5px;
  color: white;
  padding: 14px 20px;
  font-family: workSans;
  font-size: 15px;
  line-height: 14px;
  cursor: pointer;
  letter-spacing: 0.15px;
  font-weight: 600;
`;



const Button = ({ className, children, background, type }) => {
  return (
    <StyledButton type={type} className={className} background={background}>
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  type: "button",
};

export default Button;
