import { navigate } from "gatsby-link";
import React, { useEffect } from "react";
import Loader from "../components/utils/Loader";
import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const Home = () => {
  useEffect(() => {
    i18next
      .use(LanguageDetector)
      .init({
        lng: localStorage.getItem("userSetLanguage") || undefined,
        fallbackLng: "en",
        whitelist: ["en", "cs"],
      })
      .then(() => {
        const detectedLanguage = i18next.language;
        // Redirect to the appropriate language
        navigate(`/${detectedLanguage}`);
      });
  }, []);

  return <Loader />;
};

export default Home;
