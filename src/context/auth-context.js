import axios from "axios";
import React, { useState } from "react";

export const AuthContext = React.createContext({
  authenticated: () => {},
  token: "",
  loading: false,
  user: {},
  errMessage: "",
  resetErrMessage: () => {},
  logout: (values) => {},
  login: (values) => {},
});

const AuthProvider = (props) => {
  const [user, setUser] = useState({});
  const [loading, setIsLoading] = useState(false);
  const [token, setToken] = useState("");
  const [errMessage, setErrMessage] = useState("");
  const login = async (values) => {
    setIsLoading(true);

    await axios
      .post(`http://localhost:8000/api/login`, values)
      .then((res) => {
        setIsLoading(false);
        console.log(res);
        if (res.status === 201) {
          setToken(res.data.token);
          setUser(res.data.user);
          localStorage.setItem("token", res.data.token);
        } else if (res.status === 401) {
          console.log("bla");
        }
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err.response.data);
        if (err.response.status === 401) {
          setErrMessage(err.response.data["message"]);
        } else {
          setErrMessage("Something happend!");
        }
      });
  };

  const logout = () => {
    localStorage.setItem("token", "");
    setUser({});
  };

  const register = async (values) => {
    setIsLoading(true);
    await axios
      .post(`http://localhost:8000/api/register`, values)
      .then((res) => {
        if (res.status === 201) {
          setToken(res.data.token);
          setUser(res.data.user);
          localStorage.setItem("token", res.data.token);
        }
      })
      .catch((err) => {
        setIsLoading(false);
        if (err.response.status === 422) {
          setErrMessage(err.response.data["message"]);
        }
      });
  };
  const resetErrMessage = () => {
    setErrMessage("");
  };
  const authenticated = () => {
    return Object.keys(user).length !== 0;
  };

  return (
    <AuthContext.Provider
      value={{
        token: token,
        loading: loading,
        user: user,
        errMessage: errMessage,
        resetErrMessage: resetErrMessage,
        authenticated: authenticated,
        login: login,
        logout: logout,
        register: register,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
