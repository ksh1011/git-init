import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import { Navbar } from "./app/Navbar";
import { styled } from "styled-components";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    // <Router>
    <AppLayoutWrap>
      <Sidebar />
      <Contents>
        <Counter />
      </Contents>
    </AppLayoutWrap>
    // </Router>
  );
}

export default AppLayout;

const AppLayoutWrap = styled.div`
  min-height: 100%;
`;

const Contents = styled.div`
  flex: 1;
  padding-left: 256px;
  background-color: var(--color-lightGray01);
  -webkit-overflow-scrolling: auto;
  overflow-y: auto;
  min-height: calc(100% - 187px);
  /* &.headerVisible {
    padding-top: 0;
    margin-top: 60px;
  } */
`;
