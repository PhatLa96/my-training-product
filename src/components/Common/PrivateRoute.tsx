import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
interface PrivateRouteProps {}

export const PrivateRoute = (props: RouteProps) => {
  const isLogin = Boolean(localStorage.getItem('access_token'));

  if (!isLogin) return <Redirect to="/login" />;

  return <Route {...props} />;
};
