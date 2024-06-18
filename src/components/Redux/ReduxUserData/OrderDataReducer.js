// orderReducer.js
import { PLACE_ORDER } from "./ActionTypes";

const initialState = {
  orders: []
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLACE_ORDER:
    // Place order
    // Handle other cases
    default:
      return state;
  }
};

export default orderReducer;
