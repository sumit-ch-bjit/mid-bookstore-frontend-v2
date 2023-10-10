import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

// Styled components
const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  color: #333;
`;

const SubTitle = styled.h2`
  color: #555;
`;

const Description = styled.p`
  color: #777;
`;

const BookDetails = () => {
  const location = useLocation();
  const { title, author, price, description, stock, genre, discountedPrice } =
    location.state.book;

  return (
    <Container>
      <Title>{title}</Title>
      <SubTitle>Author: {author}</SubTitle>
      <SubTitle>Price: {price}</SubTitle>
      <Description>{description}</Description>
      <SubTitle>Stock: {stock}</SubTitle>
      <SubTitle>Genre: {genre}</SubTitle>
      <SubTitle>Discounted Price: {discountedPrice}</SubTitle>
    </Container>
  );
};

export default BookDetails;
