import React from "react";
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
  &.errorClass {
    border-color: #cf1322;
  }
`;

const StyledDiv = styled.div`
  width: 100%;
  padding: 0px;
  margin-top: 15px;
`;

const StyledErrorDiv = styled.div`
  display: none;
  &.errorClass {
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
  &.errorClass {
    display: inline-block;
  }
`;

const Input = (props) => {
  return (
    <StyledDiv>
      <StyledLabel htmlFor={props.label}>
        {props.label}
        <StyledImg
          className={props.error ? "errorClass" : null}
          src={errorStar}
        ></StyledImg>
      </StyledLabel>
      <StyledInput
        name={props.name}
        onChange={props.onChange}
        className={props.error ? "errorClass" : null}
        id={props.label}
        type={props.type}
      />
      <StyledErrorDiv className={props.error ? "errorClass" : null}>
        {props.error}
      </StyledErrorDiv>
    </StyledDiv>
  );
};

export default Input;
