import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const SecuredRoutes = () => {
  const isloggedIn = sessionStorage.getItem("isLoggedIn");
  const loggedIn = Boolean(isloggedIn);
  console.log(loggedIn, typeof loggedIn);
  return <>{loggedIn ? <Outlet /> : <Navigate to="/" />}</>;
};

export default SecuredRoutes;
