import React from "react";
import { Navigate, Route, Routes } from "react-router";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ component: Component }) => {
  const user = useSelector((state) => state.auth.value);
  console.log("user", user);
  return (
    <Routes>
    <Route
      render={(props) => {
        if (user) {
          return <Component {...props} />;
        } else {
          return <Navigate to="/home" />;
        }
      }}
    />
    </Routes>
  );
};

export default ProtectedRoute;