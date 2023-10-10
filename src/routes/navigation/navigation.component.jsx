import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import {
  addCurrentUser,
  removeCurrentUser,
} from "../../store/user/user.reducer";
import {
  selectCurrentUser,
  selectCurrentUserRole,
} from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { ReactComponent as StoreLogo } from "../../assets/bookstore.svg";
import { useNavigate } from "react-router-dom";

import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from "./navigation.styles";

const Navigation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const userRole = useSelector(selectCurrentUserRole);
  const isCartOpen = useSelector(selectIsCartOpen);

  const signOutHandler = () => {
    dispatch(removeCurrentUser());
    navigate("/");
  };

  console.log(currentUser);
  // console.log(userRole);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <StoreLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          {userRole !== "admin" ? (
            <NavLink to="/shop">SHOP</NavLink>
          ) : (
            <>
              <NavLink to="/add-book">Add Book</NavLink>
            </>
          )}

          {currentUser ? (
            <NavLink as="span">
              <span onClick={signOutHandler}>SIGN OUT</span>
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          {userRole === "user" ? <CartIcon /> : null}
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
