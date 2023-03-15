import React from "react";
import styled from "@emotion/styled";
import Card from "../Card";
import Logo from "../Logo";
import { ResetPasswordForm } from "../Forms";
import Layout from "../Layout";

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledForm = styled(ResetPasswordForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ResetEmailPage = () => {
  return (
    <Layout>
      <StyledMain>
        <Logo width={90} />
        <Card>
          <StyledForm />
        </Card>
      </StyledMain>
    </Layout>
  );
};
export default ResetEmailPage;