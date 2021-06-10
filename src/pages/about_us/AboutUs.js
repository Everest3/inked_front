import React from "react";
import Footer from "../../components/global_components/footer/Footer";
import AppBar from "../../containers/appbar/AppBar";
import "./aboutus.css";
import img from "../../assets/frontpageimages/girl.png";
const AboutUs = () => {
  return (
    <>
      <AppBar />
      <div className="about-us">
        <div className="d-flex ">
          <h1 style={{ width: "400px" }}>About us</h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-xs-12 text-center">
              <h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                similique necessitatibus, corrupti hic, rem dolor sapiente
                quibusdam repudiandae dicta voluptatem numquam unde harum fuga,
                facere placeat animi! Maiores unde necessitatibus est, dolores
                quas repellendus, amet reiciendis ullam quia quisquam at, eum
                assumenda neque explicabo corporis voluptatibus. Neque commodi
                aliquam libero?
              </h4>
            </div>
            <div className="col-md-6 col-xs-12 ">
              <img src={img} alt="Typing Girl" height="auto" width="90%" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
