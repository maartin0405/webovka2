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
`;

const StyledDiv = styled.div`
  width: 100%;
  padding: 0px;
  margin-top: 15px;
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

const Input = ({ type, label, onChange }) => {
  const [error, setError] = useState(false);

  const toggleError = () => {
    setError(!error);
  };
  return (
    <StyledDiv>
      <StyledLabel for={label}>
        {label}
        <StyledImg
          className={error ? "error" : null}
          src={errorStar}
        ></StyledImg>
      </StyledLabel>

      <StyledInput
        className={error ? "error" : null}
        id={label}
        onChange={onChange}
        type={type}
      />
      <button type="button" onClick={toggleError}>
        hi
      </button>
    </StyledDiv>
  );
};

export default Input;

/* function MyComponent (props) {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <div 
      className={isActive ? 'your_className': null} 
      onClick={toggleClass} 
    >
      <p>{props.text}</p>
    </div>
   );
}   */
