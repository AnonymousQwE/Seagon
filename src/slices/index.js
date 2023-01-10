import { configureStore } from "@reduxjs/toolkit";

import currentUserReducer from "./currentUserSlice";
import productsReducer from "./productsSlice";

export const store = configureStore({
  reducer: {
    currentUser: currentUserReducer,
    products: productsReducer,
  },
});
