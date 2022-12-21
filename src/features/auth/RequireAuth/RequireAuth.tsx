import React, { ReactNode, useEffect } from "react";
import { useAuth } from "../../../hooks/useAuth";
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "../actions";
import { Navigate, useLocation } from "react-router-dom";
import { RootState } from "../../../store";

interface RequireAuthProps {
  children: ReactNode;
}

export const RequireAuth: React.FC<RequireAuthProps> = ({ children }) => {
  const dispatch = useDispatch();
  const { isAuthenticated, loading } = useAuth();
  useEffect(() => {
    dispatch(authAction());
  }, []);

  if (!loading) {
    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    } else {
      return <>{children}</>;
    }
  }
  return null;
};
