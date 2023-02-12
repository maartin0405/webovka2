import React from "react";
import styled from "@emotion/styled";

const Card = ({ children }) => {
  const StyledCard = styled.div`
    background: #ffffff;
    padding: 15px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    width: 485px;
  `;
  return <StyledCard>{children}</StyledCard>;
};

export default Card;
