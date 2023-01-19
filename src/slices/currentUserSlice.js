import { createSlice } from "@reduxjs/toolkit";

import {
  serverCurrentUser,
  serverLoginUser,
  serverLogoutUser,
  serverRegisterUser,
} from "../hooks/authHook";

const currentUserSlice = createSlice({
  name: "currentUser",
  initialState: {
    CurrentUser: {},
    status: null,
    notify: {},
  },
  reducers: {
    clearNotify: (state) => {
      state.notify = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(serverLoginUser.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(serverLoginUser.fulfilled, (state, action) => {
      state.currentUser = action.payload;
      state.notify.complete =
        "You loggined from username: " + action.payload.username;
      state.status = "loaded";
    });
    builder.addCase(serverLoginUser.rejected, (state, action) => {
      state.status = "rejected";
      state.notify.error = action.payload;
    });

    builder.addCase(serverRegisterUser.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(serverRegisterUser.fulfilled, (state, action) => {
      state.currentUser = action.payload;
      state.notify.complete =
        "You registered from username: " + action.payload.username;
      state.status = "loaded";
    });
    builder.addCase(serverRegisterUser.rejected, (state, action) => {
      state.status = "rejected";
      state.notify.error = action.payload;
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
      state.notify.error = action.payload;
    });

    builder.addCase(serverLogoutUser.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(serverLogoutUser.fulfilled, (state, action) => {
      state.currentUser = action.payload;
      state.notify.complete = "LogOut Complete! Good Bye";
      state.status = "loaded";
    });
    builder.addCase(serverLogoutUser.rejected, (state, action) => {
      state.status = "rejected";
      state.notify.error = action.payload;
    });
  },
});

export const { clearNotify } = currentUserSlice.actions;

export default currentUserSlice.reducer;
