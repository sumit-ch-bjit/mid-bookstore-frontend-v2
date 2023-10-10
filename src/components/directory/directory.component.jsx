import BookItem from "../bookItem/bookItem.component";
import { Fragment } from "react";
import { useEffect, useState } from "react";
import { DirectoryContainer, Title } from "./directory.styles";
import bookApi from "../../api/bookApi";
import Pagination from "../pagination/pagination.component";
import LoadingSpinner from "../spinner/spinner.component";
import apiInstance from "../../api/apiInstance";

const Directory = () => {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 4;
  const { getBook } = bookApi();

  useEffect(() => {
    apiInstance
      .get(`/books?page=${currentPage}&pageSize=${pageSize}`)
      .then((res) => res.data)
      .then((data) => data.results)
      .then((books) => setBooks(books))
      .catch((error) => console.log(error));
    // const result = res();
    // console.log(result);
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      {books.length == 0 ? (
        <LoadingSpinner />
      ) : (
        <>
          <Fragment>
            <Title>Top 10 Books</Title>
            <DirectoryContainer>
              {books &&
                books.map((book) => <BookItem key={book._id} book={book} />)}
            </DirectoryContainer>
          </Fragment>
          <Pagination
            currentPage={currentPage}
            handlePageChange={handlePageChange}
            books={books}
            pageSize={pageSize}
          />
        </>
      )}
    </>
  );
};

export default Directory;
