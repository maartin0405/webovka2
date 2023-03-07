import React, { useState } from "react";
import "../../styles/global.css";
import styled from "@emotion/styled";
import { IntlProvider } from "react-intl";
import getLangKey from "../../utils/intl/getLangKey";
import loadLocaleMessage from "../../utils/intl/loadLocaleMessages";
import { useEffect } from "react";

const StyledDiv = styled.div`
  padding-bottom: 137px;
`;

const VALID_LANG_KEYS = ["cs", "en"];
const DEFAULT_LANG_KEY = "en";

const Layout = ({ children }) => {
  const url = window.location.pathname;
  const currentLangKey = getLangKey(url, VALID_LANG_KEYS, DEFAULT_LANG_KEY);

  const [messages, setMessages] = useState();

  useEffect(() => {
    const loadMessages = async () => {
      const messages = await loadLocaleMessage(currentLangKey);
      setMessages(messages.default);
    };

    // call the function
    loadMessages()
      // make sure to catch any error
      .catch(console.error);
  }, [currentLangKey]);

  console.log(messages);
  return (
    <IntlProvider
      locale={currentLangKey}
      defaultLocale={DEFAULT_LANG_KEY}
      messages={messages}
    >
      <StyledDiv>{children}</StyledDiv>
    </IntlProvider>
  );
};

export default Layout;
