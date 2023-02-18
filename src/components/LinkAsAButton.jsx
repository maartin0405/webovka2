import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  width: 100%;
  text-align: center;
  background-color: rgba(207, 19, 34, 0.8);
  border-radius: 5px;
  padding: 14px 0px;
  font-size: 15px;
  line-height: 14px;
  cursor: pointer;
  letter-spacing: 0.15px;
  margin-top: 5px;
  margin-bottom: 35px;
  font-weight: 600; 
`;

const LinkAsAButton = ({ children, ...props }) => {
  return <StyledLink {...props}>{children}</StyledLink>;
};

export default LinkAsAButton;
