import { createSlice } from "@reduxjs/toolkit";

import {
  serverProductCreate,
  serverProductDelete,
  serverProductsGet,
} from "../hooks/productsHook";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    categoryList: [],
    status: "loading",
    error: null,
    completeMessage: null,
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    clearMessage: (state) => {
      state.completeMessage = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(serverProductCreate.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(serverProductCreate.fulfilled, (state, action) => {
      state.completeMessage =
        "New Product Title " + action.payload.title + " created";
      state.status = "loaded";
    });
    builder.addCase(serverProductCreate.rejected, (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    });

    builder.addCase(serverProductsGet.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(serverProductsGet.fulfilled, (state, action) => {
      state.products = action.payload.products;
      state.categoryList = action.payload.categoryList;
      state.completeMessage = "Products Loaded Complete";
      state.status = "loaded";
    });
    builder.addCase(serverProductsGet.rejected, (state, action) => {
      state.status = "rejected";
      console.log(action.payload);
      // state.error = action.payload;
    });

    builder.addCase(serverProductDelete.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(serverProductDelete.fulfilled, (state, action) => {
      state.completeMessage = "Products Deleted";
      state.status = "loaded";
    });
    builder.addCase(serverProductDelete.rejected, (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    });
  },
});

export const { clearError, clearMessage } = productsSlice.actions;

export default productsSlice.reducer;
