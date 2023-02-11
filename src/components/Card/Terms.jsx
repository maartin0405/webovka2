import React from "react";
import styled from "@emotion/styled";
import Input from "../Input";

const Terms = ({ type }) => {
  const StyledTerms = styled.div`
    display: flex;
  `;
  return ( 
    <StyledTerms> 
      <Input type={type}></Input>
      <div>
        I agree with the Terms and Conditions, the Processing of Personal Data
        and the Processor Agreement.
      </div>
    </StyledTerms>  /* how do i style the input without using a class?*/
  );
};

export default Terms;
