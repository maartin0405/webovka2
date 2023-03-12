import { navigate } from "gatsby-link";
import React, { useEffect } from "react";
import Loader from "../components/utils/Loader";

const Home = () => {
  const currentLangKey = "";

  useEffect(() => {
    navigate(`/${currentLangKey}/`);
  }, []);
  return <Loader />;
};

export default Home;
