
import React, { useState } from 'react';
import styles from '../../styles/Admin.module.css';
import UserManagement from './UserManagement';
import CourseManagement from './CourseManagement';

const AdminDashboard = () => {
  const [view, setView] = useState('users');

  return (
    <div className={styles.dashboard}>
      <h1>Admin Dashboard</h1>
      <div className={styles.nav}>
        <button onClick={() => setView('users')} className={styles.button}>User Management</button>
        <button onClick={() => setView('courses')} className={styles.button}>Course Management</button>
      </div>
      <div className={styles.content}>
        {view === 'users' && <UserManagement />}
        {view === 'courses' && <CourseManagement />}
      </div>
    </div>
  );
};

export default AdminDashboard;