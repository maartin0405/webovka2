import React from "react";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const ldsRingAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
`;
const LdsRing = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
`;

const LdsRingChild = styled.div`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 4px solid;
  border-radius: 50%;
  animation: ${ldsRingAnimation} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: black transparent transparent transparent;

  &:nth-child(1) {
    animation-delay: -0.45s;
  }
  &:nth-child(2) {
    animation-delay: -0.3s;
  }
  &:nth-child(3) {
    animation-delay: -0.15s;
  }
`;

const Loader = () => {
  return (
    <Container>
      <LdsRing>
        <LdsRingChild />
        <LdsRingChild />
        <LdsRingChild />
        <LdsRingChild />
      </LdsRing>
    </Container>
  );
};

export default Loader;
