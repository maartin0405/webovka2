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
        fallbackLng: "en",
        whitelist: ["en", "cs"],
      })
      .then(() => {
        const detectedLanguage = i18next.language;

        // Redirect to the appropriate language
        if (detectedLanguage === "cs") {
          navigate("/cs/");
        } else {
          navigate("/en/");
        }
      });
  }, []);

  return <Loader />;
};

export default Home;
