import axios from "axios";
import React, { useState, useContext } from "react";
import { AuthContext } from "./auth-context";

export const BooksContext = React.createContext({
  readBooks: [],
  trendingBooks: [],
  boughtBooks: [],
  favoriteBooks: [],
  archivedBooks: [],
  commonBooks: [],
  randomBooks: [],
  books: [],
  fetchRandomBooks: () => {},
  fetchArchivedBooks: () => {},
  fetchBoughtBooks: () => {},
  setTrendingBooks: () => {},
  fetchFavoriteBooks: () => {},
  fetchReadBooks: () => {},
  fetchTrendingBooks: () => {},
  fetchAllBooks: () => {},
  fetchBookById: () => {},
  newpreferredbook: () => {},
  newarchivedbooks: () => {},
  newboughtbooks: () => {},
  newreadbooks: () => {},
});

const BooksProvider = (props) => {
  const [books, setBooks] = useState([]);
  const [readBooks, setReadBooks] = useState([]);
  const [commonBooks, setCommonBooks] = useState([]);
  const [favoriteBooks, setFavoriteBooks] = useState([]);
  const [trendingBooks, setTrendingBooks] = useState([]);
  const [boughtBooks, setBoughtBooks] = useState([]);
  const [archivedBooks, setArchivedBooks] = useState([]);
  const [randomBooks, setRandomBooks] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const auth = useContext(AuthContext);

  const config = (token) => {
    return {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
  };

  const fetchAllBooks = async () => {
    await axios.get(`http://localhost:8000/api/libra`).then((res) => {
      setIsLoading(false);
      if (res.status === 200) {
        var data = res.data;
        setBooks(data);
        return data;
      }
    });
  };

  const fetchReadBooks = async (limit = "") => {
    await axios
      .get(`http://localhost:8000/api/readbooks/${limit}`, config(auth.token))
      .then((res) => {
        setIsLoading(false);
        if (res.status === 200) {
          var data = res.data;
          setCommonBooks(data);
          setReadBooks(data);
          return res.data;
        }
      });
  };

  const fetchTrendingBooks = async (limit = "") => {
    await axios
      .get(
        `http://localhost:8000/api/trendingbooks/${limit}`,
        config(auth.token)
      )
      .then((res) => {
        if (res.status === 200) {
          var data = res.data;
          setCommonBooks(data);
          setTrendingBooks(data);
          return res.data;
        }
      });
  };

  const fetchFavoriteBooks = async (limit = "") => {
    await axios
      .get(
        `http://localhost:8000/api/preferredbooks/${limit}`,
        config(auth.token)
      )
      .then((res) => {
        if (res.status === 200) {
          var data = res.data;
          setCommonBooks(data);
          setFavoriteBooks(data);
          return res.data;
        }
      });
  };

  const fetchArchivedBooks = async (limit = "") => {
    await axios
      .get(
        `http://localhost:8000/api/archivedbooks/${limit}`,
        config(auth.token)
      )
      .then((res) => {
        if (res.status === 200) {
          var data = res.data;
          setCommonBooks(data);
          setArchivedBooks(data);
          return res.data;
        }
      });
  };

  const fetchBoughtBooks = async (limit = "") => {
    await axios
      .get(`http://localhost:8000/api/boughtbooks/${limit}`, config(auth.token))
      .then((res) => {
        if (res.status === 200) {
          var data = res.data;
          setCommonBooks(data);
          setBoughtBooks(data);
          return res.data;
        }
      });
  };

  const fetchRandomBooks = async (limit = "") => {
    await axios
      .get(`http://localhost:8000/api/randombooks/${limit}`, config(auth.token))
      .then((res) => {
        if (res.status === 200) {
          var data = res.data;
          setRandomBooks(data);
          return res.data;
        }
      });
  };

  const fetchBookById = async (id) => {
    var response = await axios.get(
      `http://localhost:8000/api/libra/${id}`,
      config(auth.token)
    );
    return response;
  };

  const newpreferredbook = async (id) => {
    console.log("test");
    await axios
      .put(
        `http://localhost:8000/api/newpreferredbook/${id}`,
        {},
        config(auth.token)
      )
      .then((res) => {
        console.log(res.data);
      });
  };
  const newarchivedbooks = async (id) => {
    console.log("test");
    await axios
      .put(
        `http://localhost:8000/api/newarchivedbooks/${id}`,
        {},
        config(auth.token)
      )
      .then((res) => {
        console.log(res.data);
      });
  };
  const newboughtbooks = async (id) => {
    console.log("test");
    await axios
      .put(
        `http://localhost:8000/api/newboughtbooks/${id}`,
        {},
        config(auth.token)
      )
      .then((res) => {
        console.log(res.data);
      });
  };
  const newreadbooks = async (id) => {
    console.log("test");
    await axios
      .put(
        `http://localhost:8000/api/newreadbooks/${id}`,
        {},
        config(auth.token)
      )
      .then((res) => {
        console.log(res.data);
      });
  };

  return (
    <BooksContext.Provider
      value={{
        loading: loading,
        commonBooks: commonBooks,
        readBooks: readBooks,
        trendingBooks: trendingBooks,
        boughtBooks: boughtBooks,
        favoriteBooks: favoriteBooks,
        archivedBooks: archivedBooks,
        randomBooks: randomBooks,
        fetchRandomBooks: fetchRandomBooks,
        newarchivedbooks: newarchivedbooks,
        newboughtbooks: newboughtbooks,
        newpreferredbook: newpreferredbook,
        newreadbooks: newreadbooks,
        fetchArchivedBooks: fetchArchivedBooks,
        fetchBoughtBooks: fetchBoughtBooks,
        fetchReadBooks: fetchReadBooks,
        fetchFavoriteBooks: fetchFavoriteBooks,
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
