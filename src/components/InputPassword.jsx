import React from "react";
import eye from "../images/eye.svg";
import Input from "./Input";
import styled from "@emotion/styled";
import { useState } from "react";

const StyledButton = styled.button`
  width: 40px;
  height: 40px;
  position: absolute;
  top: 39px;
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
  const [password, setPassword] = useState("");

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  return (
    <StyledDiv>
      <Input
        onChange={(event) => setPassword(event.target.value)}
        type={passwordShown ? "text" : "password"}
        value={password}
        label={label}
      />
      <StyledButton onClick={togglePasswordVisiblity} type="button">
        <img src={eye} />
      </StyledButton>
    </StyledDiv>
  );
};

export default InputPassword;
