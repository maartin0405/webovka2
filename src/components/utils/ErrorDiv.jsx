import React from "react";
import styled from "@emotion/styled";

const StyledErrorDiv = styled.div`
  display: block;
  margin-top: 5px;
  height: 15px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 140%;
  letter-spacing: 0.15px;
  color: #cf1322;
`;

const ErrorDiv = (props) => {
  return (
    <StyledErrorDiv className={props.className}>{props.error}</StyledErrorDiv>
  );
};

export default ErrorDiv;
