import React from 'react';
import {  useNavigate } from 'react-router-dom'; // Import useHistory for navigation
import styles from '../../styles/Student.module.css';
import { FaUserGraduate, FaBook, FaClipboardList, FaSignOutAlt } from 'react-icons/fa'; // Added logout icon
import Grades from './Grades';

const StudentDashboard = () => {
  const history = useNavigate(); // Initialize history for navigation

  const handleLogout = () => {
    // Implement your logout logic here (e.g., clearing tokens)
    history('/'); // Navigate to the login page
  };

  return (
    <div className={styles.dashboard}>
      <h1 className={styles.greeting}>Hello, Student!</h1>
      <div className={styles.options}>
        <div className={styles.option}>
          <FaUserGraduate className={styles.icon} />
          <span>Profile</span>
        </div>
        <div className={styles.option}>
          <FaBook className={styles.icon} />
          <span>Courses</span>
        </div>
        <div className={styles.option}>
          <FaClipboardList className={styles.icon} />
          <span>Assignments</span>
        </div>
      </div>
      <Grades />
      <button className={styles.logoutButton} onClick={handleLogout}>
        <FaSignOutAlt className={styles.icon} /> Logout
      </button>
    </div>
  );
};

export default StudentDashboard;
