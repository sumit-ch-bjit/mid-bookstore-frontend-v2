import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { useDispatch, useSelector } from "react-redux";
import {
  BookCardContainer,
  Footer,
  Name,
  Price,
  ButtonContainer,
} from "./bookItem.styles";
import bookImage from "../../assets/book.png";
import {
  selectCurrentUser,
  selectCurrentUserId,
  selectCurrentUserRole,
} from "../../store/user/user.selector";

import { addItemToCart } from "../../store/cart/cart.reducer";
import { useNavigate } from "react-router-dom";
import apiInstance from "../../api/apiInstance";
import {
  selectCartCount,
  selectCartTotal,
} from "../../store/cart/cart.selector";
import cartApi from "../../api/cartApi";

const BookItem = ({ book }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { _id, title, price, description, category, thumbnail } = book;
  // console.log(title, price, description);
  const currentUser = useSelector(selectCurrentUser);
  const userRole = useSelector(selectCurrentUserRole);
  const userId = useSelector(selectCurrentUserId);
  const cartItems = useSelector(selectCartCount);
  const { addToCart } = cartApi();
  const addBookToCart = async () => {
    // console.log("clicked");
    apiInstance
      .post("/cart/add-to-cart", {
        userId: userId,
        bookId: _id,
        quantity: 1,
      })
      .then(() => dispatch(addItemToCart(book)))
      .catch((err) => console.log(err));
  };

  const updateBook = () => {
    navigate("/update-book", { state: { book: book } });
  };

  const bookDetailsHandler = () => {
    navigate("/book", { state: { book: book } });
  };
  return (
    <BookCardContainer>
      <img src={bookImage} alt={`${title}`} onClick={bookDetailsHandler} />

      {userRole !== "admin" && (
        <Button onClick={addBookToCart}>Add to cart</Button>
      )}

      {userRole === "admin" && (
        <ButtonContainer>
          <Button onClick={updateBook}>Update</Button>
          <Button onClick={updateBook}>Delete</Button>
        </ButtonContainer>
      )}

      <Footer>
        <Name>{title}</Name>
        <Price>{price}</Price>
      </Footer>
    </BookCardContainer>
  );
};

export default BookItem;
