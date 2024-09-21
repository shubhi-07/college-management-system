// src/routes/PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, role }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated'); // Or use a global state/context
  const userRole = localStorage.getItem('userRole'); // You should set this upon login

  return isAuthenticated && userRole === role ? children : <Navigate to="/" />;
};

export default PrivateRoute;