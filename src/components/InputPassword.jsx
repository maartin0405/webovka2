import React from "react";
import eye from "../images/eye.svg";
import Input from "./Input";
import styled from "@emotion/styled";
import { useState } from "react";

const StyledButton = styled.button`
  width: 40px;
  height: 40px;
  position: absolute;
  top: 41px;
  right: 3px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const StyledDiv = styled.div`
  position: relative;
  width: 100%;
`;

const InputPassword = ({ label }) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [password, setPassword] = useState(""); // do i still need this???

  const togglePasswordVisiblity = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <StyledDiv>
      <Input type={passwordShown ? "text" : "password"} label={label} />
      <StyledButton onClick={togglePasswordVisiblity} type="button">
        <img src={eye} alt="Hide/Show" />
      </StyledButton>
    </StyledDiv>
  );
};

export default InputPassword;
