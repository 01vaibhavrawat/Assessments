import { useLocation, Route, Routes } from 'react-router-dom';
import { authProtectedRoutes } from "./routes";
import { useState, useMemo } from "react";

import "./styles/app.scss";

import NavCom from "./components/Navbar";


function App() {

    const location = useLocation();

  sessionStorage.setItem("token", "token");

  if (sessionStorage.getItem("token")) {

    return (
      <>
      <NavCom />
      <Routes location={location}>
              {authProtectedRoutes.map(({ path, component }, i) => {
                return (
                  <Route path={`/${path}`} end element={component} key={i} />
                );
              })}
            </Routes>
            </>
    );
  }
}

export default App;
