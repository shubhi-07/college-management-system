// src/components/Common/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/Common.module.css';

const Login = () => {
  const [userType, setUserType] = useState('student');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Authentication logic could go here (API call to verify credentials)
    
    // For simplicity, assuming authentication succeeds:
    if (username && password) {
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userRole', userType); // Save role for redirection

      // Redirect to the appropriate dashboard
      navigate(`/${userType}/dashboard`);
    } else {
      alert('Please enter valid credentials');
    }
  };

  return (
    <div className={styles.loginContainer}>
      <h1>Login</h1>
      <input 
        type="text" 
        placeholder="Username" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
        className={styles.input}
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        className={styles.input}
      />
      <select value={userType} onChange={(e) => setUserType(e.target.value)} className={styles.select}>
        <option value="student">Student</option>
        <option value="faculty">Faculty</option>
        <option value="admin">Admin</option>
      </select>
      <button onClick={handleLogin} className={styles.button}>Login</button>
    </div>
  );
};

export default Login;