import * as types from "./UserDataActionType.js";

// Retrieve the cart state from local storage if available
const savedCartState = JSON.parse(localStorage.getItem("cartState"));

const initialState = {
  cartItems: savedCartState ? savedCartState.cartItems : []
};

export const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.ADD_TO_CART:
      const newStateAdd = {
        ...state,
        cartItems: [...state.cartItems, payload]
      };
      // Save the updated cart state to local storage
      localStorage.setItem("cartState", JSON.stringify(newStateAdd));
      return newStateAdd;

    case types.REMOVE_FROM_CART:
      const newStateRemove = {
        ...state,
        cartItems: state.cartItems.filter((item) => item._id !== payload)
      };
      // Save the updated cart state to local storage
      localStorage.setItem("cartState", JSON.stringify(newStateRemove));
      return newStateRemove;

    default:
      return state;
  }
};
