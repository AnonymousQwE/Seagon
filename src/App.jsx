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

import { serverCurrentUser } from "./hooks/authHook";
import {
  PARSE_APPLICATION_ID,
  PARSE_HOST_URL,
  PARSE_JAVASCRIPT_KEY,
} from "./parseConfig";
import Notify from "./components/Notify";
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;

const App = () => {
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.currentUser.currentUser);
  useEffect(() => {
    dispatch(serverCurrentUser());
  }, []);
  return (
    <>
      <Layout>
        <Header />
        <Notify />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/setting" element={<SettingPage />} />

          <Route path="/admin/*" element={<AdminPage />} />
        </Routes>
      </Layout>
    </>
  );
};
export default App;
