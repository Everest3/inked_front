import React, { useContext } from "react";
import Footer from "../../components/footer/Footer";

import AppBar from "../../components/appbar/AppBar";
import HomeSection from "./homesection/HomeSection";
import FrontPage from "./front_page/FrontPage";
import { AuthContext } from "../../context/auth-context";

const HomePage = () => {
  const auth = useContext(AuthContext);

  return (
    <>
      <AppBar />
      {auth.authenticated() ? <HomeSection /> : <FrontPage />}
      <Footer />
    </>
  );
};

export default HomePage;
