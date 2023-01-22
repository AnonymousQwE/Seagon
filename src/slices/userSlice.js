import { createSlice } from "@reduxjs/toolkit";
import {
  loginUser,
  logoutUser,
  registerUser,
  serverUser,
} from "../hooks/userHook";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    status: null,
    notify: {},
  },
  reducers: {
    clearNotify: (state) => {
      state.notify = {};
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.notify.complete = "Вы успешно авторизовались! Добро пожаловать!";
      state.status = "loaded";
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.status = "rejected";
      state.notify.error = action.payload;
    });

    builder.addCase(registerUser.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.notify.complete = "Вы успешно зарегистрировались!";
      state.status = "loaded";
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.notify.error = action.payload;
      state.status = "rejected";
    });

    builder.addCase(serverUser.pending, (state, action) => {
      console.log("serverUserPENDING");
      state.status = "loading";
    });
    builder.addCase(serverUser.fulfilled, (state, action) => {
      console.log("serverUserFULLFILED");
      // state.user = action.payload;
      state.status = "loaded";
    });
    builder.addCase(serverUser.rejected, (state, action) => {
      console.log("serverUserREJECT");
      state.notify.error = action.payload;
      state.status = "rejected";
    });

    builder.addCase(logoutUser.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(logoutUser.fulfilled, (state) => {
      state.user = {};
      state.notify.complete = "Вы успешно вышли из системы. До свидания!";
      state.status = "loaded";
    });
    builder.addCase(logoutUser.rejected, (state, action) => {
      state.status = "rejected";
      state.notify.error = action.payload;
    });
  },
});

export const { clearNotify, setUser } = userSlice.actions;

export default userSlice.reducer;
