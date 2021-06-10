import axios from "axios";
import React, { useState } from "react";

export const BooksContext = React.createContext({
  books: {},
  getBooks: () => {},
});

const BooksProvider = (props) => {
  const [books, setBooks] = useState([]);
  const [loading, setIsLoading] = useState(false);

  const fetchAllBooks = async () => {
    setIsLoading(true);
    await axios.get(`http://localhost:8000/api/libra`).then((res) => {
      setIsLoading(false);
      if (res.status === 201) {
        setBooks(res.data);
        console.log(books);
      }
    });
  };

  const getBooks = (values) => {
    var a = Math.floor(Math.random() * 17) + 1;

    return books.slice(a, a + 3);
  };

  return (
    <BooksContext.Provider
      value={{
        loading: loading,
        boks: books,
        getBooks: getBooks,
        fetchAllBooks: fetchAllBooks,
      }}
    >
      {props.children}
    </BooksContext.Provider>
  );
};
