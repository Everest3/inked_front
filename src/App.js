import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./assets/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import HomePage from "./pages/HomePage.js";
import Test from "./containers/test/Test";
import AuthContext from "./context/auth-context";
import AuthProvider from "./context/auth-context";
import Book from "./pages/book/Book";
import AboutUs from "./pages/about_us/AboutUs";
import Blog from "./pages/blog/Blog";
import Library from "./pages/library/Library";
import { BooksContext } from "./context/book-context";
import BoksContext from "./context/book-context";
// import jwt_decode from "jwt-decode";
// export const AuthContext = React.createContext();

function App() {
  // const books = useContext(BooksContext);
  // let token = document.head.querySelector('meta[name="csrf-token"]');
  // if (token) {
  //   window.axios.defaults.headers.common["X-CSRF-TOKEN"] = token.content;
  // } else {
  //   console.error(
  //     "CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token"
  //   );
  // }

  useEffect(() => {
    console.log("sdf");
    // books.fetchAllBooks();
  }, []);

  return (
    <AuthProvider>
      {/* <BooksProvider> */}
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/test" component={Test}></Route>
          <Route exact path="/book" component={Book}></Route>
          <Route exact path="/about" component={AboutUs}></Route>
          <Route exact path="/blog" component={Blog}></Route>
          <Route exact path="/library" component={Library}></Route>
        </Switch>
      </Router>
      {/* </BooksProvider> */}
    </AuthProvider>
  );
}

export default App;
