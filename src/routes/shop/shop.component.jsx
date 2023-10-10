import React, { useState, useEffect } from "react";
import BookItem from "../../components/bookItem/bookItem.component";
import FormInput from "../../components/form-input/form-input.component";
import { ShopContainer, FilterBarContainer } from "./shop.styles";
const Shop = ({ books }) => {
  const [filter, setFilter] = useState("");

  const filteredBooks = books.filter((book) => {
    return book.title.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <>
      <FilterBarContainer>
        <FormInput
          type="text"
          placeholder="Filter books by title"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </FilterBarContainer>
      <ShopContainer>
        {books &&
          filteredBooks.map((book) => <BookItem key={book._id} book={book} />)}
      </ShopContainer>
    </>
  );
};

export default Shop;
