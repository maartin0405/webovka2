import React, { useState } from "react";
import Layout from "../Layout";
import Card from "../Card";
import { Input, Button, Link, Text, LinkAsAButton } from "../utils/";
import { FormattedMessage } from "react-intl";
import Header from "../Header";

const ForgottenPasswordPage = () => {
  return (
    <Layout>
      <Card>
        <Text>
          <FormattedMessage id="welcomeBack" />
        </Text>
        <Header size={1}>
          <FormattedMessage id="login" />
        </Header>
        <Input name="email" type="text" label="Email" required />
        <Link to="/login">
          <FormattedMessage id="forgotPassword" />
        </Link>
        <Button type="submit" background="#0980CD">
          <FormattedMessage id="login" />
        </Button>
        <Text>
          <FormattedMessage id="dontHaveAccountYet" />
        </Text>
        <LinkAsAButton to={`/register`}>
          <FormattedMessage id="register" />
        </LinkAsAButton>
      </Card>
    </Layout>
  );
};

export default ForgottenPasswordPage;
