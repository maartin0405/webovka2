import React from "react";
import Link from "./Link";
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
  font-weight: 600;
`;

const LinkAsAButton = ({ className, children, ...props }) => {
  return (
    <StyledLink className={className} {...props}>
      {children}
    </StyledLink>
  );
};

export default LinkAsAButton;
