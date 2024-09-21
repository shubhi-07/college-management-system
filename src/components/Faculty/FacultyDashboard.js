import React from 'react';
import {  useNavigate } from 'react-router-dom'; // Import useHistory for navigation
import styles from '../../styles/Faculty.module.css';
import { FaChalkboardTeacher, FaClipboardCheck, FaSignOutAlt } from 'react-icons/fa'; // Importing icons


const FacultyDashboard = () => {
  const history = useNavigate(); // Initialize history for navigation

  const handleLogout = () => {
    // Implement your logout logic here (e.g., clearing tokens)
    history('/'); // Navigate to the login page
  };

  return (
    <div className={styles.dashboard}>
      <h1 className={styles.greeting}>Hi, Faculty!</h1>
      <div className={styles.options}>
        <div className={styles.option}>
          <FaChalkboardTeacher className={styles.icon} />
          <span>Manage Courses</span>
        </div>
        <div className={styles.option}>
          <FaClipboardCheck className={styles.icon} />
          <span>Attendance</span>
        </div>
      </div>
      
      <button className={styles.logoutButton} onClick={handleLogout}>
        <FaSignOutAlt className={styles.icon} /> Logout
      </button>
    </div>
  );
};

export default FacultyDashboard;
