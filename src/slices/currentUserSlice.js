import { createSlice } from "@reduxjs/toolkit";

import Parse from "parse/dist/parse.js";

import {
  serverCurrentUser,
  serverLoginUser,
  serverRegisterUser,
} from "../hooks/authHooks";


const currentUserSlice = createSlice({
  name: "currentUser",
  initialState: {
    CurrentUser: {},
    status: null,
    error: null,
    completeMessage: null,
  },
  reducers: {
    serverLogoutUser: (state) => {
      Parse.User.logOut();
      state.currentUser = null;
      state.status = "loaded";
      state.completeMessage = "LogOut Complete";
    },
    clearError: (state) => {
      state.error = null;
    },
    clearMessage: (state) => {
      state.completeMessage = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(serverLoginUser.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(serverLoginUser.fulfilled, (state, action) => {
      state.currentUser = action.payload;
      state.completeMessage =
        "You loggined from username: " + action.payload.username;
      state.status = "loaded";
    });
    builder.addCase(serverLoginUser.rejected, (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    });

    builder.addCase(serverRegisterUser.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(serverRegisterUser.fulfilled, (state, action) => {
      state.currentUser = action.payload;
      state.completeMessage =
        "You registered from username: " + action.payload.username;
      state.status = "loaded";
    });
    builder.addCase(serverRegisterUser.rejected, (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    });

    builder.addCase(serverCurrentUser.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(serverCurrentUser.fulfilled, (state, action) => {
      state.status = "loaded";
      state.currentUser = action.payload;
    });
    builder.addCase(serverCurrentUser.rejected, (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    });
  },
});

export const { serverLogoutUser, clearError, clearMessage } =
  currentUserSlice.actions;

export default currentUserSlice.reducer;
