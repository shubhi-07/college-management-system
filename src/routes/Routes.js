import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../components/Common/Login';
import AdminDashboard from '../components/Admin/AdminDashboard';
import FacultyDashboard from '../components/Faculty/FacultyDashboard';
import StudentDashboard from '../components/Student/StudentDashboard';
import PrivateRoute from './PrivateRoute';


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin/dashboard" element={<PrivateRoute role="admin"><AdminDashboard /></PrivateRoute>} />
        <Route path="/faculty/dashboard" element={<PrivateRoute role="faculty"><FacultyDashboard /></PrivateRoute>} />
        <Route path="/student/dashboard" element={<PrivateRoute role="student"><StudentDashboard /></PrivateRoute>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;