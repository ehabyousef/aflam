import React, { useContext } from "react";
import { userContext } from "../Context";
import { Outlet, useNavigate } from "react-router-dom";

const ProtectedRoute = () => {
  const { userData } = useContext(userContext);
  let navigate = useNavigate();
  return <>{userData ? <Outlet /> : navigate("/login")}</>;
};

export default ProtectedRoute;
