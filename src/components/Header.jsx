import React from "react";
import styled from "@emotion/styled";

const Header = ({ children, size }) => {
  const Tag = `h${size}`;
  return <Tag>{children}</Tag>;
};

export default Header;
