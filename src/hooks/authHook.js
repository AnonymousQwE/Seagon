import { createAsyncThunk } from "@reduxjs/toolkit";
import Parse from "parse/dist/parse.js";

export const serverCurrentUser = createAsyncThunk(
  "currentUser/serverGetUser",
  async () => {
    try {
      const serverUser = await Parse.User.current();
      if (serverUser != null) {
        const currentUser = {
          username: serverUser.attributes.username,
          id: serverUser.id,
          isAdmin: serverUser.attributes.accessLevel === "admin" ? true : false,
        };
        console.log(serverUser.attributes.accessLevel);
        return currentUser;
      }
    } catch (error) {
      console.log(error);
      // return error;
    }
  }
);
export const serverRegisterUser = createAsyncThunk(
  "currentUser/serverRegisterUser",
  async ({ username, password, email }, { rejectWithValue }) => {
    try {
      const attr = {
        email: email,
        accessLevel: "user",
      };
      const serverUser = await Parse.User.signUp(username, password, attr);
      const currentUser = {
        username: serverUser.attributes.username,
        id: serverUser.id,
        isAdmin: false,
      };
      return currentUser;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const serverLoginUser = createAsyncThunk(
  "currentUser/serverLoginUser",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const serverUser = await Parse.User.logIn(username, password);
      if (!serverUser.id) {
        throw new Error("Error");
      }
      const currentUser = {
        username: serverUser.attributes.username,
        id: serverUser.id,
        isAdmin: serverUser.attributes.accessLevel === "admin" ? true : false,
      };
      return currentUser;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const serverLogoutUser = createAsyncThunk(
  "currentUser/serverLogoutUser",
  async () => {
    try {
      await Parse.User.logOut();
      return null;
    } catch (error) {
      console.log(error);
      // return error;
    }
  }
);
