import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import { useContext } from "react";

export const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = "$" + cartCtx.totalAmount.toFixed(2);

  const hasItems = cartCtx.items.length > 0;

  const onAddHandler = (item) => {
    const oneOfItem = { ...item, amount: 1 };
    cartCtx.addItem(oneOfItem);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => {
        return (
          <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
            onAdd={onAddHandler.bind(null, item)}
            onRemove={() => {
              cartCtx.removeItem(item.id);
            }}
          />
        );
      })}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button
          type="click"
          className={classes["button--alt"]}
          onClick={props.onClose}
        >
          Close
        </button>
        {hasItems && (
          <button type="click" className={classes.button}>
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
