import React, { useState } from "react";
import styled from "@emotion/styled";
import errorStar from "../images/Vector.svg";

const StyledInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  height: 40px;
  background: #ffffff;
  border: 1px solid #bfbfbf;
  border-radius: 5px;
  padding: 10px;
  margin-top: 5px;
  &.error {
    border-color: #cf1322;
  }
  margin-bottom: 5px;
`;

const StyledDiv = styled.div`
  width: 100%;
  padding: 0px;
  margin-top: 15px;
`;

const StyledErrorDiv = styled.div`
  display: none;
  &.error {
    display: inline-block;
  }
  height: 15px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 140%;
  letter-spacing: 0.15px;
  color: #cf1322;
`;

const StyledLabel = styled.label`
  font-weight: 600;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: 0.15px;
  display: flex;
  align-items: flex-start;
  line-height: 140%;
`;

const StyledImg = styled.img`
  display: none;
  margin-left: 3.35px;
  &.error {
    display: inline-block;
  }
`;

const Input = (props) => {
  const [error, setError] = useState(false);

  const toggleError = () => {
    setError(!error);
  };

  const [value, setValue] = useState("");

  return (
    <StyledDiv>
      <StyledLabel htmlFor={props.label}>
        {props.label}
        <StyledImg
          className={error ? "error" : null}
          src={errorStar}
        ></StyledImg>
      </StyledLabel>
      <StyledInput
        className={error ? "error" : null}
        id={props.label}
        type={props.type}
        onChange={(event) => setValue(event.target.value)}
      />
      <StyledErrorDiv className={error ? "error" : null}>
        Placeholder
      </StyledErrorDiv>
      <button type="button" onClick={toggleError}>
        hi
      </button>
    </StyledDiv>
  );
};

export default Input;
