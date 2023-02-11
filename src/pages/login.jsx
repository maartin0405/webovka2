import React from "react";
import Card from "../components/Card";
import styled from "@emotion/styled";
import Logo from "../components/Logo";
import Input from "../components/Input";
import Button from "../components/Button";
import Terms from "../components/Card/Terms";

const Login = () => {
  const StyledLogin = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
  return (
    <StyledLogin>
      <Logo width={90} />
      <Card>
        <div>Take your business to a new level.</div>
        <div>create a new account.</div>
        <Input type={"text"} label={"Your Name"} />
        <Input type={"text"} label={"Email"} />
        <Input type={"password"} label={"Password"} />
        <Input type={"password"} label={"Confirm Password"} />
        <Terms type={"checkbox"} />
        <Button text={"Create Account"} />
        <div>
          <div>Already have an account?</div>
          <Button text={"Log in"} />
        </div>
      </Card>
    </StyledLogin> /* how do i style the divs without using a class?, it doesnt let me use another css thingy in here*/
  );
};

export default Login;
