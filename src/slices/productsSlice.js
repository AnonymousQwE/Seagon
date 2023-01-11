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
    notify: {
      error: null,
      complete: null,
    },
  },
  reducers: {
    clearError: (state) => {
      state.notify.error = null;
    },
    clearMessage: (state) => {
      state.notify.complete = null;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
  _extraReducers: (builder) => {
    builder.addCase(serverProductCreate.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(serverProductCreate.fulfilled, (state, action) => {
      state.notify.complete = "New Product CreateComplete ";
      state.products.push(action.payload);
      state.status = "loaded";
    });
    builder.addCase(serverProductCreate.rejected, (state, action) => {
      state.status = "rejected";
      console.log(action.payload)
      state.notify.error = action.payload;
    });

    builder.addCase(serverProductsGet.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(serverProductsGet.fulfilled, (state, action) => {
      state.products = action.payload.products;
      state.categoryList = action.payload.categoryList;
      state.notify.complete = "Products Loaded Complete";
      state.status = "loaded";
    });
    builder.addCase(serverProductsGet.rejected, (state, action) => {
      state.status = "rejected";
      console.log(action.payload);
      // state.notify.error = action.payload;
    });

    builder.addCase(serverProductDelete.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(serverProductDelete.fulfilled, (state, action) => {
      state.notify.complete = "Products Deleted";
      state.products = action.payload;
      state.status = "loaded";
    });
    builder.addCase(serverProductDelete.rejected, (state, action) => {
      state.status = "rejected";
      state.notify.error = action.payload;
    });
  },
  get extraReducers() {
    return this._extraReducers;
  },
  set extraReducers(value) {
    this._extraReducers = value;
  },
});

export const { clearError, clearMessage, setProducts } = productsSlice.actions;

export default productsSlice.reducer;
