import React from "react";
import Card from "../components/Card";
import styled from "@emotion/styled";
import Logo from "../components/Logo";
import Input from "../components/Input";
import Button from "../components/Button";
import Checkbox from "../components/Checkbox";

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
        <p>Take your business to a new level.</p>
        <h1>create a new account.</h1>
        <Input type={"text"} label={"Your Name"} />
        <Input type={"text"} label={"Email"} />
        <Input type={"password"} label={"Password"} />
        <Input type={"password"} label={"Confirm Password"} />
        <Checkbox
          label={
            "I agree with the Terms and Conditions, the Processing of Personal Data and the Processor Agreement."
          }
        ></Checkbox>
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
