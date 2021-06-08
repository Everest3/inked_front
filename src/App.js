import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./assets/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import HomePage from "./pages/HomePage.js";
import Test from "./containers/test/Test";
import moduleName from "module";
import AuthContext from "./context/auth-context";
import AuthProvider from "./context/auth-context";
// import jwt_decode from "jwt-decode";
// export const AuthContext = React.createContext();

function App() {
  // let token = document.head.querySelector('meta[name="csrf-token"]');
  // if (token) {
  //   window.axios.defaults.headers.common["X-CSRF-TOKEN"] = token.content;
  // } else {
  //   console.error(
  //     "CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token"
  //   );
  // }
  const authInitialData = {
    user: {},
    token: "",
  };
  const [auth, setAuth] = useState(authInitialData);

  React.useEffect(() => {
    var token = localStorage.getItem("token");
    var user = localStorage.getItem("user");
    console.log(user);
    console.log(token);
    if (token !== "") {
      // const decoded_token = jwt_decode(token);
      // console.log(jwt_decode(token));
      // if (decoded_token.exp * 1000 > Date.now()) {
      //   setAuth({ user: {}, token: "" });
      // }
    }
  }, []);

  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/test" component={Test}></Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
