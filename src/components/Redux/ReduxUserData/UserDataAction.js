import * as types from "./UserDataActionType";

export const addToCart = (payload) => {
  console.log(payload);
  return {
    type: types.ADD_TO_CART,
    payload: payload
  };
};

export const removeFromCart = (payload) => {
  console.log(payload);
  return {
    type: types.REMOVE_FROM_CART,
    payload: payload
  };
};
