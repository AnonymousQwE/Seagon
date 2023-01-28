import React, { useEffect } from "react";
import Parse from "parse/dist/parse.js";

import { useDispatch, useSelector } from "react-redux";

import { Layout } from "antd";
import "antd/dist/reset.css";

import { Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage";
import AdminPage from "./pages/AdminPage";
import SettingPage from "./pages/SettingPage";

import {
  PARSE_APPLICATION_ID,
  PARSE_HOST_URL,
  PARSE_JAVASCRIPT_KEY,
} from "./parseConfig";
import Notify from "./components/Notify";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { setUser } from "./slices/userSlice";
import Cart from "./components/Cart/Cart";
import AuthPage from "./pages/AuthPage";

Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;

const App = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);

  const getData = async () => {};

  useEffect(() => {
    getData();
  }, [user]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          setUser({
            id: user.uid,
            email: user.email,
            displayName: user.providerData[0].displayName,
            photoURL: user.providerData[0].photoURL,
          })
        );
        return user;
      } else {
        return {};
      }
    });
  }, [dispatch]);
  return (
    <>
      <Notify />
      <Layout>
      </Layout>
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Header />

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/setting" element={<SettingPage />} />
          <Route path="/admin/*" element={<AdminPage />} />
          <Route path="/auth" element={<AuthPage />} />

        </Routes>
      </Layout>
    </>
  );
};
export default App;
