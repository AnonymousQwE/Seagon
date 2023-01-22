import { configureStore } from "@reduxjs/toolkit";

import currentUserReducer from "./currentUserSlice";
import productsReducer from "./productsSlice";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    currentUser: currentUserReducer,
    products: productsReducer,
  },
});
