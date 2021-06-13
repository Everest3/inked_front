import axios from "axios";
import React, { useState } from "react";

export const AuthContext = React.createContext({
  authenticated: () => {},
  token: "",
  loading: false,
  user: {},
  logout: (values) => {},
  login: (values) => {},
});

const AuthProvider = (props) => {
  const [user, setUser] = useState({});
  const [loading, setIsLoading] = useState(false);
  const [token, setToken] = useState("");

  const login = async (values) => {
    setIsLoading(true);
    await axios.post(`http://localhost:8000/api/login`, values).then((res) => {
      setIsLoading(false);
      if (res.status === 201) {
        // console.log(token);
        setToken(res.data.token);
        // console.log(token);
        // console.log(user);

        setUser(res.data.user);
        // console.log(user);
        localStorage.setItem("token", res.data.token);
      }
    });
  };

  const logout = () => {
    localStorage.setItem("token", "");
    setUser({});
  };

  const register = async (values) => {
    setIsLoading(true);
    console.log(values);
    await axios
      .post(`http://localhost:8000/api/register`, values)
      .then((res) => {
        if (res.status === 201) {
          setToken(res.data.token);
          setUser(res.data.user);
          localStorage.setItem("token", res.data.token);
        }
      });
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
