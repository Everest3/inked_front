import React, { useContext } from "react";
import RowCards from "../../components/global_components/row_cards/RowCards";
import BookPreview from "../../components/homesection/book_preview/BookPreview";
import FrontPage from "../../components/homesection/front_page/FrontPage";
import { AuthContext } from "../../context/auth-context";

const HomeSection = () => {
  const auth = useContext(AuthContext);
  return (
    <>
      {auth.authenticated() ? (
        <div className="container">
          <div className="row">
            <div className="col">
              <h1
                className="font-weight-bold"
                style={{
                  fontFamily: '"Syne", sans-serif',
                  color: "#8e9aaf",
                  marginTop: "50px",
                }}
              >
                Welcome home!
              </h1>
            </div>
            <div className="row">
              <div className="col">
                <h4
                  style={{
                    marginTop: "50px",
                    marginBottom: "40px",
                    fontFamily: '"Syne", sans-serif',
                  }}
                >
                  Continue reading
                </h4>
                <RowCards />
                <BookPreview />
                <div class="row">
                  <div class="col">
                    <h4>Trending</h4>
                  </div>
                </div>
                <RowCards />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <FrontPage />
      )}
    </>
  );
};

export default HomeSection;
