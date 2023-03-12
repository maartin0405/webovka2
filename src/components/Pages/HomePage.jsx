import { React, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import auth from "../../firebase/auth";
import Text from "../utils/Text";
import Layout from "../Layout";

const HomePage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log(uid);
        setUser(user);
      } else {
        console.log("User is not logged in.");
        setUser(null);
      }
    });
  }, []);

  return (
    <Layout>
      <Text>{user ? `Welcome, ${user.email}` : "Please log in."}</Text>
    </Layout>
  );
};

export default HomePage;
