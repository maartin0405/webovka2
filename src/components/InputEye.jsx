import React from "react";
import eye from "../images/eye.svg";
import Input from "./Input";
import styled from "@emotion/styled";
import { useState } from "react";

const StyledButton = styled.button`
  height: 40px;
  width: 40px;
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
`;

const StyledInput = styled(Input)`
`;

const InputEye = ({ className, label }) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [password, setPassword] = useState("");

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  return (
    <StyledDiv>
      <StyledInput
        className={className}
        id="username"
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

export default InputEye;

/**   <StyledLabel>
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
</StyledLabel> */
