import React from "react";
import eye from "../images/eye.svg";
import Input from "./Input";
import styled from "@emotion/styled";
import { useState } from "react";

const InputEye = ({ label }) => {
  const StyledButton = styled.button`
    position: absolute;
    border-radius: 5px;
    right: 1%;
    z-index: 2;
    border: none;
    top: 22%;
    height: 32px;
    cursor: pointer;
    background-color: transparent;
  `;

  const StyledDiv = styled.div`
    position: relative;
  `;

  const StyledLabel = styled.label`
    width: 100%;
    margin-top: 15px;
  `;

  const [passwordShown, setPasswordShown] = useState(false);
  const [password, setPassword] = useState("");

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  return (
    <StyledLabel>
      {label}
      <StyledDiv>
        <Input
          onChange={(event) => setPassword(event.target.value)}
          type={passwordShown ? "text" : "password"}
          value={password}
        />
        <StyledButton onClick={togglePasswordVisiblity} type="button">
          <img src={eye} />
        </StyledButton>
      </StyledDiv>
    </StyledLabel>
  );
};

export default InputEye;
