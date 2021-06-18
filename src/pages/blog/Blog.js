import React from "react";
import foto from "../../assets/blogimages/foto.png";
import { Link } from "react-router-dom";
import "./blog.css";
import girl from "../../assets/blogimages/girl.png";
import Footer from "../../components/footer/Footer";
import AppBar from "../../components/appbar/AppBar";

const Blog = () => {
  return (
    <>
      <AppBar />
      <div className="blog">
        <div className="d-flex justify-content-center">
          <h1>What's new</h1>
        </div>
        <div className="container" style={{ marginBottom: "50px" }}>
          <div className="carousel-wrap">
            <div className="owl-carousel owl-theme">
              {/* <div className="item">
              <div className="card" style={{ width: 300 }}>
                <img className="card-img-top" src={foto} alt="Card cap" />
                <div className="card-body">
                  <h5 className="card-title">News 1</h5>
                  <p className="card-text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Facere minus at modi sit, magnam cumque?
                  </p>
                  <div className="d-flex justify-content-center">
                    <Link className="btn rounded-pill btn-secondary">
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="card" style={{ width: 300 }}>
                <img className="card-top" src={foto} alt="Card cap" />
                <div className="card-body">
                  <h5 className="card-title">News 2</h5>
                  <p className="card-text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Facere minus at modi sit, magnam cumque?
                  </p>
                  <div className="d-flex justify-content-center">
                    <Link href="#" className="btn rounded-pill btn-secondary">
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="card" style={{ width: 300 }}>
                <img className="card-top" src={foto} alt="Card cap" />
                <div className="card-body">
                  <h5 className="card-title">News 3</h5>
                  <p className="card-text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Facere minus at modi sit, magnam cumque?
                  </p>
                  <div className="d-flex justify-content-center">
                    <Link href="#" className="btn rounded-pill btn-secondary">
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="card" style={{ width: 300 }}>
                <img className="card-img-top" src={foto} alt="Card cap" />
                <div className="card-body">
                  <h5 className="card-title">News 4</h5>
                  <p className="card-text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Facere minus at modi sit, magnam cumque?
                  </p>
                  <div className="d-flex justify-content-center">
                    <Link href="#" className="btn rounded-pill btn-secondary">
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            </div> */}
              {/* <div className="item">
              <div className="card" style={{ width: 300 }}>
                <img className="card-img-top" src={foto} alt="Card cap" />
                <div className="card-body">
                  <h5 className="card-title">News 5</h5>
                  <p className="card-text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Facere minus at modi sit, magnam cumque?
                  </p>
                  <div className="d-flex justify-content-center">
                    <Link href="#" className="btn rounded-pill btn-secondary">
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            </div> */}
            </div>
          </div>
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={girl} alt="..." width="300px" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">News</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorum doloribus illum tempore architecto quia placeat
                    commodi! Ipsum fuga magnam ratione animi, voluptatum neque
                    sit. Sed, tempore earum ratione necessitatibus voluptas
                    rerum voluptatibus, suscipit nostrum veniam non placeat
                    inventore? Dolores, quo.
                  </p>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <Link href="#" className="btn rounded-pill btn-secondary">
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={girl} alt="..." width="300px" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">News</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestias repellendus voluptatem sint odit distinctio sit! A
                    perspiciatis similique quod recusandae. Nesciunt aliquam
                    iure quam voluptatibus quo officiis cumque ea, repellendus
                    eius perspiciatis, dolore quisquam? Fuga quam ut perferendis
                    asperiores sit.
                  </p>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <Link href="#" className="btn rounded-pill btn-secondary">
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={girl} alt="..." width="300px" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">News</h5>
                  <p className="card-text">
                    Lorem, ipsum dolor sit amet repellat tempore minima quaerat
                    aut dolorum suscipit sint consectetur adipisicing elit.
                    Magnam sed similique quod recusandae laudantium pariatur
                    deserunt non vel quia hic. Minus, molestias illo eius,
                    voluptatum, repellat tempore minima quaerat aut dolorum
                    suscipit sint!
                  </p>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <Link href="#" className="btn rounded-pill btn-secondary">
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
