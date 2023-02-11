import React from "react";
import styled from "@emotion/styled";

const Card = ({ children }) => {
  const StyledCard = styled.div`
    padding: 32px;
    background-color: hotpink;
    font-size: 24px;
    border-radius: 4px;
    color: black;
    font-weight: bold;
    &:hover {
      color: white;
    }
  `;
  return <StyledCard>{children}</StyledCard>;
};

export default Card;
