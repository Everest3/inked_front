import React from "react";
import Footer from "../components/global_components/footer/Footer";

import AppBar from "../containers/appbar/AppBar";
import HomeSection from "../containers/homsection/HomeSection";

const HomePage = () => {
  return (
    <>
      <AppBar />
      <HomeSection />
      <Footer />
    </>
  );
};

export default HomePage;
