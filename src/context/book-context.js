import axios from "axios";
import React, { useState, useContext } from "react";
import { AuthContext } from "./auth-context";

export const BooksContext = React.createContext({
  readBooks: [],
  trendingBooks: [],
  setTrendingBooks: () => {},
  fetchReadBooks: () => {},
  books: [],
  fetchAllBooks: () => {},
  fetchBookById: () => {},
  fetchTrendingBooks: () => {},
});

const BooksProvider = (props) => {
  const [books, setBooks] = useState([]);
  const [readBooks, setReadBooks] = useState([]);
  const [trendingBooks, setTrendingBooks] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const auth = useContext(AuthContext);

  const config = (token) => {
    return {
      headers: { Authorization: `Bearer ${token}` },
    };
  };
  const fetchAllBooks = async () => {
    setIsLoading(true);
    await axios.get(`http://localhost:8000/api/libra`).then((res) => {
      setIsLoading(false);
      if (res.status === 200) {
        var data = res.data;
        setBooks(data);
      }
    });
    setIsLoading(false);
  };

  const fetchReadBooks = async (limit = "") => {
    setIsLoading(true);
    await axios
      .get(`http://localhost:8000/api/readbooks/${limit}`, config(auth.token))
      .then((res) => {
        setIsLoading(false);
        if (res.status === 200) {
          var data = res.data;
          setReadBooks(data);
        }
      });
    setIsLoading(false);
  };

  const fetchBookById = async (id) => {
    var response = await axios.get(
      `http://localhost:8000/api/libra/${id}`,
      config(auth.token)
    );
    return response;
  };

  const fetchTrendingBooks = async (limit = "") => {
    await axios
      .get(
        `http://localhost:8000/api/trendingbooks/${limit}`,
        config(auth.token)
      )
      .then((res) => {
        setIsLoading(false);
        if (res.status === 200) {
          var data = res.data;
          setTrendingBooks(data);
        }
      });
  };

  return (
    <BooksContext.Provider
      value={{
        loading: loading,
        readBooks: readBooks,
        trendingBooks: trendingBooks,
        fetchReadBooks: fetchReadBooks,
        fetchBookById: fetchBookById,
        fetchTrendingBooks: fetchTrendingBooks,
        fetchAllBooks: fetchAllBooks,
        books: books,
      }}
    >
      {props.children}
    </BooksContext.Provider>
  );
};

export default BooksProvider;
