import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = (props) => {
  const [buttonHighLight, setButtonHighLight] = useState(false);

  const { items } = useContext(CartContext);

  console.log(items);

  let NumberOfCartItems = items.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);

  const buttonClasses = `${classes.button} ${
    buttonHighLight ? classes.bump : " "
  }`;

  useEffect(() => {
    if (items.length === 0) return;

    setButtonHighLight(true);

    const timer = setTimeout(() => {
      setButtonHighLight(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [NumberOfCartItems]);

  return (
    <button type="click" onClick={props.onClick} className={buttonClasses}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span>
        <strong className={classes.badge}>{NumberOfCartItems}</strong>
      </span>
    </button>
  );
};

export default HeaderCartButton;
