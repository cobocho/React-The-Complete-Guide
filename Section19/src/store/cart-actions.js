import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-http-ee2ff-default-rtdb.firebaseio.com/cart.json"
      );

      if (!response.ok) {
        throw new Error("Fetching cart data failed.");
      }

      const data = await response.json();

      return data;
    };

    try {
      const cartData = await fetchData();

      if (cartData) {
        dispatch(cartActions.replaceCart(cartData));
      }
    } catch (error) {
      dispatch(
        uiActions.setNotification({
          status: "error",
          title: "Error!",
          message: "Fetcing cart data failed!",
        })
      );
    }
  };
};

export const sendCartData = (cartData) => {
  return async (dispatch) => {
    dispatch(
      uiActions.setNotification({
        status: "pending",
        title: "sending...",
        message: "Sending cart data!",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://react-http-ee2ff-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cartData.items,
            totalQuantity: cartData.totalQuantity,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
    };

    try {
      await sendRequest();

      dispatch(
        uiActions.setNotification({
          status: "success",
          title: "Success!",
          message: "Sending cart data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.setNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};
