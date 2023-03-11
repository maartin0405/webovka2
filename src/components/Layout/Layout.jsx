import React, { useState } from "react";
import "../../styles/global.css";
import styled from "@emotion/styled";
import { IntlProvider } from "react-intl";
import getLangKey from "../../utils/intl/getLangKey";
import loadLocaleMessage from "../../utils/intl/loadLocaleMessages";
import { useEffect } from "react";
import { VALID_LANG_KEYS, DEFAULT_LANG_KEY } from "../../utils/intl/LANG_KEYS";
import Loader from "../utils/Loader";

const StyledDiv = styled.div`
  padding-bottom: 137px;
`;

const Layout = ({ children }) => {
  const url = typeof window !== "undefined" ? window.location.pathname : "";
  const currentLangKey = getLangKey(url, VALID_LANG_KEYS, DEFAULT_LANG_KEY);

  const [messages, setMessages] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMessages = async () => {
      const messages = await loadLocaleMessage(currentLangKey);
      setMessages(messages.default);
      setLoading(false);
    };

    // call the function
    loadMessages()
      // make sure to catch any error
      .catch(console.error);
  }, [currentLangKey]);

  if (loading) {
    return <Loader />;
  }

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
