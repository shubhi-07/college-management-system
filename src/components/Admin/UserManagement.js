
import React, { useState } from 'react';
import styles from '../../styles/Admin.module.css';

const UserManagement = () => {
  const [users, setUsers] = useState([{ name: 'John Doe', role: 'student' }]);
  const [name, setName] = useState('');
  const [role, setRole] = useState('student');

  const addUser = () => {
    const newUser = { name, role };
    setUsers([...users, newUser]);
    setName('');
    setRole('student');
  };

  const deleteUser = (index) => {
    const newUsers = users.filter((_, i) => i !== index);
    setUsers(newUsers);
  };

  return (
    <div className={styles.container}>
      <h2>User Management</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={styles.input}
      />
      <select value={role} onChange={(e) => setRole(e.target.value)} className={styles.input}>
        <option value="student">Student</option>
        <option value="faculty">Faculty</option>
        <option value="admin">Admin</option>
      </select>
      <button onClick={addUser} className={styles.button}>Add User</button>

      <ul className={styles.list}>
        {users.map((user, index) => (
          <li key={index} className={styles.listItem}>
            {user.name} - {user.role}
            <button onClick={() => deleteUser(index)} className={styles.deleteButton}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserManagement;