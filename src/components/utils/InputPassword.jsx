import React from "react";
import eye from "../../images/eye.svg";
import Input from "./Input";
import styled from "@emotion/styled";
import { useState } from "react";

const StyledButton = styled.button`
  width: 40px;
  height: 38px;
  padding: 0px;
  position: absolute;
  top: 40px;
  right: 1px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledDiv = styled.div`
  position: relative;
  width: 100%;
`;

const InputPassword = (props) => {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <StyledDiv>
      <Input {...props} type={passwordShown ? "text" : "password"} />
      <StyledButton onClick={togglePasswordVisiblity} type="button">
        <img src={eye} alt="Hide/Show" />
      </StyledButton>
    </StyledDiv>
  );
};

export default InputPassword;
